module Keyboard exposing (..)


type alias KeyCode =
  Int


type alias ModifierCode =
  Int


type alias MediaCode =
  Int


type alias KeyPress =
  { key : KeyCode
  , modifier: ModifierCode
  , media: MediaCode
  }


type Action
  = Single KeyPress
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


createNewAction : Layout -> Key -> Int -> Layout
createNewAction layout key layerIndex =
  let
    replace k =
      if k.id == key.id then
        setKeyAction k layerIndex <| Just <| FreeText <| ""
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
  Single { key = 0xF004, modifier = 0, media = 0 }


defaultSequenceAction : Action
defaultSequenceAction =
  Sequence [ ]


defaultFreeTextAction : Action
defaultFreeTextAction =
  FreeText ""
