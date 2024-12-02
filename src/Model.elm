module Model exposing (..)

import Keyboard exposing (..)
import Settings exposing (Settings)
import Language exposing (Language)


type alias Model =
  { layout : Layout
  , settings: Settings
  , currentLayerIndex : Int
  , selectedKey : Maybe Key
  , name : String
  , hovering : Bool
  , language : Language
  }
