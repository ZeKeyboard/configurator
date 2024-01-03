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


type alias Action
  = List KeyPress


type alias Key =
  { row : Int
  , col : Int
  , x : Float
  , y : Float
  , height : Float
  , width : Float
  , action : Maybe Action
  }

type alias Layout = List Key
