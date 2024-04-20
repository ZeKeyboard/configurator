module Keyboard exposing (..)
import Browser.Navigation exposing (Key)


type alias KeyCode =
  Int


type alias KeyPress =
  { key : KeyCode
  , modifier: KeyCode
  , media: KeyCode
  }


type Action
  = Single KeyCode
  | Sequence String (List KeyPress) (Maybe String)  -- raw string, list of key presses, possible error message
  | FreeText String


type alias Layers =
  { actionLayer1 : Maybe Action
  , actionLayer2 : Maybe Action
  , actionLayer3 : Maybe Action
  }


type KeyActions
  = LayerModifier KeyCode  -- the exact layer code
  | LayerAction Layers


type alias Key =
  { id : Int
  , row : Int
  , col : Int
  , x : Float
  , y : Float
  , height : Float
  , width : Float
  , actions : KeyActions
  }


type alias Layout = List Key


selectedLayerAction : Layers -> Int -> Maybe Action
selectedLayerAction layers layerIndex =
  if layerIndex == 0 then
    layers.actionLayer1
  else if layerIndex == 1 then
    layers.actionLayer2
  else if layerIndex == 2 then
    layers.actionLayer3
  else
    Nothing


setDefaultAction : Key -> Int -> Key
setDefaultAction key layerIndex =
  setKeyAction key layerIndex <| Just <| defaultSingleAction


createNewAction : Layout -> Key -> Layout
createNewAction layout key =
  let
    replace k =
      if k.id == key.id then
        key
      else
        k
  in
    List.map replace layout


setKeyAction : Key -> Int -> Maybe Action -> Key
setKeyAction key layerIndex maybeAction =
  let
    blankLayers =
      { actionLayer1 = Nothing
      , actionLayer2 = Nothing
      , actionLayer3 = Nothing
      }
    newLayers =
      setLayerAction layerIndex blankLayers maybeAction
  in
    case key.actions of
      LayerModifier _ ->
        { key | actions = LayerAction newLayers }
      LayerAction layers ->
        { key | actions = LayerAction <| setLayerAction layerIndex layers maybeAction }


setLayerModifier : Key -> KeyCode -> Key
setLayerModifier key keyCode =
  { key | actions = LayerModifier keyCode }


setLayerAction : Int -> Layers -> Maybe Action -> Layers
setLayerAction layerIndex layers maybeAction =
  if layerIndex == 0 then
    { layers | actionLayer1 = maybeAction }
  else if layerIndex == 1 then
    { layers | actionLayer2 = maybeAction }
  else if layerIndex == 2 then
    { layers | actionLayer3 = maybeAction }
  else
    layers


isKeyBlank : Key -> Int -> Bool
isKeyBlank key layerIndex =
  case key.actions of
    LayerModifier _ ->
      False
    LayerAction layers ->
      case selectedLayerAction layers layerIndex of
        Just action ->
          case action of
            Single _ ->
              False
            Sequence _ _ _ ->
              False
            FreeText _ ->
              False
        Nothing ->
          True


updateKeyInLayout : Layout -> Key -> Layout
updateKeyInLayout layout key =
  let
    replace k =
      if k.id == key.id then
        key
      else
        k
  in
    List.map replace layout


defaultSingleAction : Action
defaultSingleAction =
  Single 0xF004


defaultSequenceAction : Action
defaultSequenceAction =
  Sequence "" [ ] Nothing


defaultFreeTextAction : Action
defaultFreeTextAction =
  FreeText ""
