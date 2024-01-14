module Model exposing (..)

import Keyboard exposing (..)


type alias Model =
  { content : String
  , layout : Layout
  , currentLayerIndex : Int
  }
