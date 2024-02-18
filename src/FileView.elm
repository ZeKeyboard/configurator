module FileView exposing (fileView, maybeDownloadFile)

import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import File.Download as Download

import Messages exposing (Msg)
import KeyboardSerializer
import Model exposing (Model)


maybeDownloadFile : Model -> (Model, Cmd Msg)
maybeDownloadFile model =
  let
    serializedContent =
      KeyboardSerializer.serializeLayout model.layout
  in
    (model, Download.bytes "Configuration.zkb" "application/x-binary" serializedContent)


fileView : Html Msg
fileView =
  div [ ]
    [ button [ onClick Messages.Download ] [ text "Save" ] ]
