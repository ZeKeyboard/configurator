module Main exposing (main)

import Browser
import Html.Styled exposing (Html, Attribute, div, input, text, span)
import Html.Styled exposing (toUnstyled)
import Html.Styled.Attributes exposing (..)
import Html.Styled.Events exposing (onInput)

import Messages exposing (Msg)
import Generated.Layout exposing (initialLayout)
import Model exposing (Model)
import KeyboardView exposing (keyboardView)
import ViewControl exposing (viewControl)
import InputView exposing (inputView)
import FileView exposing (fileView, exportConfiguration)
import SettingsView exposing (settingsView)
import Settings exposing (updateIntegerSetting, updateBooleanSetting)
import File
import Keyboard
import UI
import Browser exposing (application)
import Task
import Language exposing (Language)
import KeyboardSerializer


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
   , settings = Settings.initialSettings
   , currentLayerIndex = 0
   , selectedKey = Nothing
   , name = "Untitled Configuration"
   , hovering = False
   , language = Language.Swedish }, Cmd.none)


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
    Messages.ResetAction key ->
      let
        newKey = Keyboard.setKeyAction key model.currentLayerIndex Nothing
      in
        ({ model | layout = Keyboard.updateKeyInLayout model.layout newKey
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

    Messages.Export ->
      exportConfiguration model

    Messages.Save->
      FileView.saveProjectFile model

    Messages.ChangeName name ->
      ({ model | name = name }, Cmd.none)

    Messages.SelectProjectFile ->
      (model, FileView.selectProjectFile)

    Messages.Open file ->
      ({ model | name = File.name file }, Task.perform Messages.FileRead (File.toString file))

    Messages.FileRead content ->
      FileView.loadProjectFile content model

    Messages.DragEnter ->
      ({ model | hovering = True }, Cmd.none)

    Messages.DragLeave ->
      ({ model | hovering = False }, Cmd.none)

    Messages.DroppedFiles file _ ->
      ({ model | hovering = False, name = File.name file }, Task.perform Messages.FileRead (File.toString file))

    Messages.UpdateIntegerSetting settingNumber minValue maxValue value ->
      let
        valueInt = Maybe.withDefault 0 (String.toInt value)
        newSettings = Settings.updateIntegerSetting settingNumber valueInt minValue maxValue model.settings
      in
        ({ model | settings = newSettings }, Cmd.none)

    Messages.UpdateBooleanSetting settingNumber value ->
      let
        newSettings = Settings.updateBooleanSetting settingNumber value model.settings
      in
        ({ model | settings = newSettings }, Cmd.none)

    Messages.UpdateEnumSetting settingNumber value strOptions ->
      let
        newSettings = Settings.updateEnumSetting settingNumber value strOptions model.settings
      in
        ({ model | settings = newSettings }, Cmd.none)

    Messages.SetLanguage language ->
      ({ model | language = language }, Cmd.none)


view : Model -> Html Msg
view model =
  let
    keyInputView =
      case model.selectedKey of
        Nothing ->
          span [ class "whiteText inputViewControl" ] [ text "Please select a key" ]
        Just key ->
          inputView key model.currentLayerIndex model.language
    totalView =
      UI.configuratorView
        model.name
        model.hovering
        (viewControl model.currentLayerIndex model.language)
        (keyboardView model.layout model.currentLayerIndex model.selectedKey model.hovering model.language)
        keyInputView
        (fileView model.name)
        (settingsView model.settings)
    serializedModel = KeyboardSerializer.serializeEverything model
  in
    div []
    [ span [ class "serializedModelSpan", id "serializedModel" ] [ text serializedModel ]
    , totalView
      ]
