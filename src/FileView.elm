module FileView exposing (fileView)

import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import Messages exposing (Msg)



fileView : Html Msg
fileView =
  div [ ]
    [ button [ onClick Messages.Download ] [ text "Save" ] ]
