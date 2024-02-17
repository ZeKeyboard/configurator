module InputView exposing (inputView)
import Keyboard exposing (KeyCode, KeyPress, Action(..), Key, defaultSingleAction, defaultSequenceAction, defaultFreeTextAction)
import Messages exposing (Msg)
import Css exposing (..)
import Html.Styled exposing (..)
import Dict exposing (Dict)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css, for, name, value)
import Html.Styled.Events exposing (onInput)
import Html.Styled.Attributes exposing (selected)
import KeyCodes exposing (..)


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
    singleActionString = "single"
    sequenceActionString = "sequence"
    freeActionString = "free"

    selectedAction =
      case action of
        Single _ ->
          singleActionString

        Sequence _ _ _ ->
          sequenceActionString

        FreeText _ ->
          freeActionString

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
        [ option [ value singleActionString
                 , selected (selectedAction == singleActionString) ] [ "Single key" |> text ]
        , option [ value sequenceActionString
                 , selected (selectedAction == sequenceActionString) ] [ "Sequence" |> text ]
        , option [ value freeActionString
                 , selected (selectedAction == freeActionString) ] [ "Free text" |> text ]
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

    Sequence rawString sequence maybeError ->
      sequenceInput rawString sequence key maybeError

    FreeText freeText ->
      freeTextInput freeText key


parseKeyPress : List String -> Result String KeyPress
parseKeyPress maybeKeyCodes =
  let
    parsedKeys = List.map (\str -> (str, keyCodeFromString str)) maybeKeyCodes

    validKeyCodes = List.filterMap (\(_, maybeKeyCode)
      -> case maybeKeyCode of
        Just keyCode -> Just keyCode
        Nothing -> Nothing) parsedKeys

    invalidKeys = List.filterMap (\(str, maybeKeyCode)
      -> case maybeKeyCode of
        Just _ -> Nothing
        Nothing -> Just str) parsedKeys

    key = Maybe.withDefault 0 (List.head <| List.filter isStandardKeyCode validKeyCodes)
    modifier = Maybe.withDefault 0 (List.head <| List.filter isModifierKeyCode validKeyCodes)
    media = Maybe.withDefault 0 (List.head <| List.filter isMediaKeyCode validKeyCodes)

  in
    if List.length maybeKeyCodes > 3 then
      Err <| String.concat [ "Too many key codes in keypress (", String.join " + " maybeKeyCodes, ")" ]
    else if List.length maybeKeyCodes < 1 then
      Err "No key codes in keypress"
    else if List.length invalidKeys > 0 then
      Err <| String.concat [ "Invalid key codes in keypress: ", String.join ", " invalidKeys ]
    else
      Ok { key = key, modifier = modifier, media = media }


{-| Parses a string of key presses into a list of key presses.
    The string should have the format "key1 + modifier1 + media1, keycode2 ..."-}
parseSequence : String -> List (Result String KeyPress)
parseSequence str =
  let
    rawKeyPresses =
      List.map String.trim (String.split "," str)

    splitKeyPress rawKeyPress =
      List.map String.trim (String.split "+" rawKeyPress)

    unparsedKeyPresses =
      List.map splitKeyPress rawKeyPresses
  in
    List.map parseKeyPress unparsedKeyPresses


sequenceInput : String -> List KeyPress -> Key -> Maybe String -> Html Msg
sequenceInput rawString keyPresses key maybeError =
  let
    numValidKeyPresses =
      List.length <| keyPresses

    currentErrorText =
      Maybe.withDefault "" maybeError

    onTextInput str =
      let

        parsedKeyPresses =
          parseSequence str

        validKeyPresses =
          List.filterMap (\result ->
            case result of
              Ok keyPress ->
                Just keyPress

              Err _ ->
                Nothing) parsedKeyPresses

        errors =
          List.filterMap (\result ->
            case result of
              Ok _ ->
                Nothing

              Err err ->
                Just err) parsedKeyPresses

        errorText =
          String.join ", " errors

        maybeErrorText =
          if List.length errors > 0 then
            Just errorText
          else
            Nothing

      in
        (Messages.SetKeyAction key (Sequence str (validKeyPresses) maybeErrorText))

  in
    span [] [ input [ onInput <| onTextInput ] []
            , span [] [ text <| String.concat [ String.fromInt numValidKeyPresses
                                              , " key combinations." ] ]
            , span [] [ text currentErrorText ] ]


freeTextInput : String -> Key -> Html Msg
freeTextInput text key =
  input [ onInput <| \s -> Messages.SetKeyAction key (FreeText s)
                        , value text, css [ width (px 200) ] ] []


singleInput : KeyCode -> Key -> Html Msg
singleInput keyCode key =
  let
    options =
      List.map (\k -> option
        [ k |> keyCodeToString |> value
        , selected (k == keyCode) ]
        [ k |> keyCodeToString |> text ])
        (Dict.keys keyCodes)

    keyCodeConvert maybeCode =
      case maybeCode of
        Just c ->
          c
        Nothing ->
          0
  in
    select [ name "actionType"
           , css [ width (px 100) ]
           , onInput <| \str -> Messages.SetKeyAction key
           <| Single
           <| (str |> keyCodeFromString |> keyCodeConvert) ]
      options

