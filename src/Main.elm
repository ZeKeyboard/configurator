module Main exposing (main)

import Browser
import Html exposing (Html, Attribute, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Messages exposing (Msg)
import Keyboard exposing (..)
import Generated.Layout exposing (initialLayout)

-- MAIN


main =
  Browser.sandbox
    { init = init
    , update = update
    , view = view
    }



-- MODEL

type alias Model =
  { content : String
  }


init : Model
init =
  { content = "" }


update : Messages.Msg -> Model -> Model
update msg model =
  case msg of
    Messages.Change newContent ->
      { model | content = newContent }


-- VIEW


view : Model -> Html Msg
view model =
  div []
    [ input [ placeholder "Text to reverse", value model.content, onInput Messages.Change ] []
    , div [] [ text (String.reverse model.content) ]
    ]
