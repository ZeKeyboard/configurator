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
import ViewControl exposing (viewControl)
import InputView exposing (inputView)
import FileView exposing (fileView, maybeDownloadFile)
import Keyboard
import UI
import Browser exposing (application)


main : Program () Model Msg
main =
  let
    toDocument title htmlView model =
      { title = title
      , body = [ htmlView model |> toUnstyled ] }
  in
    Browser.document
      { init = init
      , update = update
      , view = toDocument "Keyboard configurator" view
      , subscriptions = subscriptions
      }


init : flags -> (Model, Cmd Msg)
init _ =
  ({ layout = initialLayout
   , currentLayerIndex = 0
   , selectedKey = Nothing }, Cmd.none)


subscriptions : Model -> Sub Msg
subscriptions _ =
  Sub.none


update : Messages.Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Messages.KeyClicked key ->
      ({ model | selectedKey = Just key } , Cmd.none)
    Messages.CreateAction key ->
      let
        newKey = Keyboard.setDefaultAction key model.currentLayerIndex
      in
        ({ model | layout = Keyboard.createNewAction model.layout newKey
                , selectedKey = Just newKey } , Cmd.none)
    Messages.SetKeyAction key action ->
      let
        newKey =
          Keyboard.setKeyAction key model.currentLayerIndex (Just action)
      in
        ({ model | layout = Keyboard.updateKeyInLayout model.layout newKey
        , selectedKey = Just newKey }, Cmd.none)
    Messages.SetLayerModifier key keyCode ->
      let
        newKey =
          Keyboard.setLayerModifier key keyCode
      in
        ({ model | layout = Keyboard.updateKeyInLayout model.layout newKey
        , selectedKey = Just newKey }, Cmd.none)

    Messages.SetLayer index ->
      ({ model | currentLayerIndex = index }, Cmd.none)
    Messages.Download ->
      maybeDownloadFile model


view : Model -> Html Msg
view model =
  let
    keyInputView =
      case model.selectedKey of
        Nothing ->
          text "Please select a key"
        Just key ->
          inputView key model.currentLayerIndex
  in
    UI.configuratorView
      (viewControl model.currentLayerIndex)
      (keyboardView model.layout model.currentLayerIndex model.selectedKey)
      keyInputView
      fileView

