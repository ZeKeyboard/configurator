module UI exposing (configuratorView)

import Css exposing (..)
import Html
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)


configuratorView : Html Msg -> Html Msg -> Html Msg
configuratorView keyboardView inputView =
    div [ ]
        [ keyboardView
        , inputView
        ]

