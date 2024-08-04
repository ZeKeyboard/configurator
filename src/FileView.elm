module FileView exposing (..)

import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, type_, placeholder, value)
import Html.Styled.Events exposing (onClick, onInput)
import File.Download as Download
import File.Select as Select
import File exposing (File)

import Messages exposing (Msg)
import KeyboardSerializer
import LayoutJSONEncoder exposing (encodeModel)
import LayoutJSONDecoder exposing (decodeModel)
import Model exposing (Model)
import Html.Styled.Attributes exposing (placeholder)
import Messages exposing (Msg(..))


exportConfiguration : Model -> (Model, Cmd Msg)
exportConfiguration model =
  let
    serializedLayout =
      KeyboardSerializer.serializeLayout model.layout

    serializedSettings =
      KeyboardSerializer.serializeSettings model.settings

    serializedContent =
      serializedLayout ++ serializedSettings
  in
    (model, Download.string (model.name ++ ".zkb") "text/plain" serializedContent)


saveProjectFile : Model -> (Model, Cmd Msg)
saveProjectFile model =
  let
    json = encodeModel model
  in
    (model, Download.string (model.name ++ ".json") "application/json" json)


loadProjectFile : String -> Model -> (Model, Cmd Msg)
loadProjectFile content model =
  case decodeModel content model.name of
    Ok newModel ->
      ( newModel, Cmd.none )

    Err _ ->
      ( model, Cmd.none )


selectProjectFile : Cmd Msg
selectProjectFile =
  Select.file [ "application/json" ] Messages.Open


fileView : String -> Html Msg
fileView name =
  div [ class "fileViewControl" ]
    [ button [ class "primaryButton", onClick Messages.Export ] [ text "Export" ]
    , button [ class "primaryButton", onClick Messages.Save ] [ text "Save project" ]
    , button [ class "primaryButton", onClick SelectProjectFile ] [ text "Open project" ]
    , input [ type_ "text", placeholder "Name your configuration", onInput Messages.ChangeName, value name ] [ ]
    ]
