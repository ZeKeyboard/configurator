module Main exposing (main)

import Browser
import Html.Styled exposing (Html, Attribute, div, input, text)
import Html.Styled exposing (toUnstyled)
import Html.Styled.Attributes exposing (..)
import Html.Styled.Events exposing (onInput)
import Messages exposing (Msg)
import Generated.Layout exposing (initialLayout)
import Model exposing (Model)
import KeyboardView exposing (keyboardView)

-- MAIN


main =
  Browser.sandbox
    { init = init
    , update = update
    , view = view >> toUnstyled
    }




init : Model
init =
  { content = ""
  , layout = initialLayout
  , currentLayerIndex = 0 }


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
    , div [] [ keyboardView model.layout model.currentLayerIndex ]
    ]
