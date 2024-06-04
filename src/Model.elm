module Model exposing (..)

import Keyboard exposing (..)


type alias Model =
  { layout : Layout
  , currentLayerIndex : Int
  , selectedKey : Maybe Key
  , name : String
  , hovering : Bool
  }
