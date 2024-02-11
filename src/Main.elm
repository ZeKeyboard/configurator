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
import InputView exposing (inputView)
import Keyboard
import UI

-- MAIN


main : Program () Model Msg
main =
  Browser.sandbox
    { init = init
    , update = update
    , view = view >> toUnstyled
    }


init : Model
init =
  { layout = initialLayout
  , currentLayerIndex = 0
  , selectedKey = Nothing }


update : Messages.Msg -> Model -> Model
update msg model =
  case msg of
    Messages.KeyClicked key ->
      { model | selectedKey = Just key }
    Messages.CreateAction key ->
      let
        newKey = Keyboard.setDefaultAction key model.currentLayerIndex
      in
        { model | layout = Keyboard.createNewAction model.layout newKey
                , selectedKey = Just newKey }
    Messages.SetKeyAction key action ->
      let
        newKey =
          Keyboard.setKeyAction key model.currentLayerIndex (Just action)
      in
        { model | layout = Keyboard.updateKeyInLayout model.layout newKey
                , selectedKey = Just newKey }


-- VIEW


view : Model -> Html Msg
view model =
  let
    keyInputView =
      case model.selectedKey of
        Nothing ->
          text "Please select a key"
        Just key ->
          inputView (Keyboard.selectedLayerAction key model.currentLayerIndex) key
  in
    UI.configuratorView
      (keyboardView model.layout model.currentLayerIndex model.selectedKey)
      keyInputView

