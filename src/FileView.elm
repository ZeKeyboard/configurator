module FileView exposing (..)

import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, type_, placeholder, value)
import Html.Styled.Events exposing (onClick, onInput)
import File.Download as Download
import File.Select as Select
import File exposing (File)

import Messages exposing (Msg)
import KeyboardSerializer
import LayoutJSONEncoder exposing (encodeLayout)
import LayoutJSONDecoder exposing (decodeLayout)
import Model exposing (Model)
import Html.Styled.Attributes exposing (placeholder)
import Messages exposing (Msg(..))


exportConfiguration : Model -> (Model, Cmd Msg)
exportConfiguration model =
  let
    serializedContent =
      KeyboardSerializer.serializeLayout model.layout
  in
    (model, Download.string (model.name ++ ".zkb") "text/plain" serializedContent)


saveProjectFile : Model -> (Model, Cmd Msg)
saveProjectFile model =
  let
    json = encodeLayout model.layout
  in
    (model, Download.string (model.name ++ ".json") "application/json" json)


loadProjectFile : String -> Model -> (Model, Cmd Msg)
loadProjectFile content model =
  case decodeLayout content of
    Ok layout ->
      ( { model | layout = layout }, Cmd.none )

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
