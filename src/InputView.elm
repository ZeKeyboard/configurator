module InputView exposing (inputView)
import Keyboard exposing (Action, Key, defaultSingleAction, defaultSequenceAction, defaultFreeTextAction)
import Messages exposing (Msg)
import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css, for, name, value)
import Html.Styled.Events exposing (onInput)
import Html.Styled.Attributes exposing (selected)
import List exposing (singleton)


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
  in
    div []
      [ label [ for "actionType" ] [ "Action type:" |> text ]
      , select [ name "actionType", onInput actionInputToMessage, css [ width (px 100) ] ]
        -- TODO listen to the change event instead and let the key type decide which is selected
          [ option [ value "single" ] [ "Single key" |> text ]
          , option [ value "sequence" ] [ "Sequence" |> text ]
          , option [ value "free" ] [ "Free text" |> text ]
          ]
      , button [ onClick <| Messages.CreateAction key ] [ "Reset action" |> text ]
      ]

