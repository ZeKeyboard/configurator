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
  | Sequence (List KeyPress)
  | FreeText String


type alias Key =
  { id : Int
  , row : Int
  , col : Int
  , x : Float
  , y : Float
  , height : Float
  , width : Float
  , actionLayer1 : Maybe Action
  , actionLayer2 : Maybe Action
  , actionLayer3 : Maybe Action
  }


type alias Layout = List Key


selectedLayerAction : Key -> Int -> Maybe Action
selectedLayerAction key layerIndex =
  if layerIndex == 0 then
    key.actionLayer1
  else if layerIndex == 1 then
    key.actionLayer2
  else if layerIndex == 2 then
    key.actionLayer3
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
  if layerIndex == 0 then
    { key | actionLayer1 = maybeAction }
  else if layerIndex == 1 then
    { key | actionLayer2 = maybeAction }
  else if layerIndex == 2 then
    { key | actionLayer3 = maybeAction }
  else
    key


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
  Sequence [ ]


defaultFreeTextAction : Action
defaultFreeTextAction =
  FreeText ""
