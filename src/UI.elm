module UI exposing (configuratorView)

import Css exposing (..)
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class)
import ViewControl exposing (viewControl)


configuratorView : String -> Html Msg -> Html Msg -> Html Msg -> Html Msg -> Html Msg
configuratorView name viewControl keyboardView inputView fileView =
    div [ ]
        [ h1 [ class "whiteText" ] [ text name ]
        , viewControl
        , keyboardView
        , inputView
        , fileView
        ]

