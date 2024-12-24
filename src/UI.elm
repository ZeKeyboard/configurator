module UI exposing (configuratorView)

import Css exposing (..)
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Events exposing (preventDefaultOn)
import Html.Styled.Attributes exposing (class)
import ViewControl exposing (viewControl)
import KeyboardView exposing (keyboardView)

import File
import Json.Decode as Decode


configuratorView : String -> Bool -> Html Msg -> Html Msg -> Html Msg -> Html Msg -> Html Msg -> Html Msg
configuratorView name hovering viewControl keyboardView inputView fileView settingsView =
  div
    [ hijackOn "dragenter" (Decode.succeed Messages.DragEnter)
    , hijackOn "dragover" (Decode.succeed Messages.DragEnter)
    , hijackOn "dragleave" (Decode.succeed Messages.DragLeave)
    , hijackOn "drop" dropDecoder
    ]
    [ h1 [ class "whiteText" ] [ text name ]
    , viewControl
    , keyboardView
    , inputView
    , settingsView
    , hr [] []
    , fileView
    ]


dropDecoder : Decode.Decoder Msg
dropDecoder =
  Decode.at ["dataTransfer","files"] (Decode.oneOrMore Messages.DroppedFiles File.decoder)


hijackOn : String -> Decode.Decoder msg -> Attribute msg
hijackOn event decoder =
  preventDefaultOn event (Decode.map hijack decoder)


hijack : msg -> (msg, Bool)
hijack msg =
  (msg, True)
