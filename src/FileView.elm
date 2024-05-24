module FileView exposing (fileView, maybeDownloadFile)

import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import File.Download as Download

import Messages exposing (Msg)
import KeyboardSerializer
import LayoutJSONEncoder exposing (encodeLayout)
import LayoutJSONDecoder exposing (decodeLayout)
import Model exposing (Model)


maybeDownloadFile : Model -> (Model, Cmd Msg)
maybeDownloadFile model =
  let
    serializedContent =
      KeyboardSerializer.serializeLayout model.layout
  in
    (model, Download.string "Configuration.zkb" "text/plain" serializedContent)


fileView : Html Msg
fileView =
  div [ ]
    [ button [ onClick Messages.Download ] [ text "Save" ] ]
