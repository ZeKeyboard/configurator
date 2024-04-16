module UI exposing (configuratorView)

import Css exposing (..)
import Html
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import ViewControl exposing (viewControl)


configuratorView : Html Msg -> Html Msg -> Html Msg -> Html Msg -> Html Msg
configuratorView viewControl keyboardView inputView fileView =
    div [ ]
        [ viewControl
        , keyboardView
        , inputView
        , fileView
        ]

