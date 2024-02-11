module InputView exposing (inputView)
import Keyboard exposing (KeyPress, Action(..), Key, defaultSingleAction, defaultSequenceAction, defaultFreeTextAction)
import Messages exposing (Msg)
import Css exposing (..)
import Html.Styled exposing (..)
import Dict exposing (Dict)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css, for, name, value)
import Html.Styled.Events exposing (onInput)
import Html.Styled.Attributes exposing (selected)
import KeyCodes exposing (..)
import Keyboard exposing (KeyCode)


inputView : Maybe Action -> Key -> Html Msg
inputView maybeAction key =
  case maybeAction of
    Nothing ->
      div [] [ button [ onClick <| Messages.CreateAction key ] [ "New action" |> text ] ]
    Just action ->
      actionInput action key


actionInput : Action -> Key -> Html Msg
actionInput action key =
  let
    actionInputToMessage str =
      case str of
        "single" ->
          Messages.SetKeyAction key defaultSingleAction

        "sequence" ->
          Messages.SetKeyAction key defaultSequenceAction

        "free" ->
          Messages.SetKeyAction key defaultFreeTextAction

        _ ->
          Messages.SetKeyAction key defaultSingleAction

    actionDropdown =
      select [ name "actionType", onInput actionInputToMessage, css [ width (px 100) ] ]
        [ option [ value "single" ] [ "Single key" |> text ]
        , option [ value "sequence" ] [ "Sequence" |> text ]
        , option [ value "free" ] [ "Free text" |> text ]
        ]
  in
    div []
      [ label [ for "actionType" ] [ "Action type:" |> text ]
      , actionDropdown
      , valueInput action key
      , button [ onClick <| Messages.CreateAction key ] [ "Reset action" |> text ]
      ]


valueInput : Action -> Key -> Html Msg
valueInput action key =
  case action of
    Single keyCode ->
      singleInput keyCode key

    Sequence sequence ->
      div [] []

    FreeText freeText ->
      div [] []


singleInput : KeyCode -> Key -> Html Msg
singleInput keyCode key =
  let
    options =
      List.map (\k -> option
        [ k |> keyCodeToString |> value
        , selected (k == keyCode) ]
        [ k |> keyCodeToString |> text ])
        (Dict.keys keyCodes)
  in
    select [ name "actionType"
           , css [ width (px 100) ]
           , onInput <| \str -> Messages.SetKeyAction key <| Single <| keyCodeFromString str]
      options
