module InputView exposing (inputView)
import Keyboard exposing (KeyCode, KeyPress, Action(..), Key, defaultSingleAction, defaultSequenceAction, defaultFreeTextAction)
import Messages exposing (Msg)
import Css exposing (..)
import Html.Styled exposing (..)
import Dict exposing (Dict)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css, for, name, value, class, selected)
import Html.Styled.Events exposing (onInput)
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
      select [ class "keyDropdown inputViewControl"
             , name "actionType"
             , onInput actionInputToMessage ]
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
      , button [ class "inputViewControl"
               , onClick <| Messages.CreateAction key ] [ "Reset action" |> text ]
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
    parsedKeys =
      List.map (\str -> (str, keyCodeFromString str)) maybeKeyCodes

    validKeyCodes =
      List.filterMap (\(_, maybeKeyCode) -> maybeKeyCode) parsedKeys

    invalidKeys = List.filterMap (\(str, maybeKeyCode)
      -> case maybeKeyCode of
        Just _ -> Nothing
        Nothing -> Just str) parsedKeys

    key =
      Maybe.withDefault
        blankStandardKeyCode
        (List.head <| List.filter isStandardKeyCode validKeyCodes)

    modifier =
      Maybe.withDefault
        blankModifierKeyCode
        (List.head <| List.filter isModifierKeyCode validKeyCodes)

    media =
      Maybe.withDefault
        blankMediaKeyCode
        (List.head <| List.filter isMediaKeyCode validKeyCodes)

  in
    if List.length maybeKeyCodes > 3 then
      Err <| String.concat
        [ "Too many key codes in keypress (", String.join " + " maybeKeyCodes, ")" ]
    else if List.length maybeKeyCodes < 1 then
      Err "No key codes in keypress"
    else if List.length invalidKeys > 0 then
      Err <| String.concat
        [ "Invalid key codes in keypress: ", String.join ", " invalidKeys ]
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
    span [] [ input [ class "inputViewControl"
                    , onInput <| onTextInput, value rawString ] []
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
    standardKeys =
      List.filter isStandardKeyCode (Dict.keys keyCodes)

    modifierKeys =
      List.filter isModifierKeyCode (Dict.keys keyCodes)

    mediaKeys =
      List.filter isMediaKeyCode (Dict.keys keyCodes)

    mouseKeys =
      List.filter isMouseKeyCode (Dict.keys keyCodes)

    controlKeys =
      List.filter isControlKeyCode (Dict.keys keyCodes)

    options codes =
      List.map (\k -> option
        [ k |> keyCodeToString |> value
        , selected (k == keyCode) ]
        [ k |> keyCodeToString |> text ])
        codes

    keyCodeConvert maybeCode =
      case maybeCode of
        Just c ->
          c
        Nothing ->
          0
  in
    select [ name "actionType"
           , class "keyDropdown inputViewControl"
           , onInput <| \str -> Messages.SetKeyAction key
           <| Single
           <| (str |> keyCodeFromString |> keyCodeConvert) ]
      ( options standardKeys
      ++ [ hr [] [] ]
      ++ options modifierKeys
      ++ [ hr [] [] ]
      ++ options mediaKeys
      ++ [ hr [] [] ]
      ++ options mouseKeys
      ++ [ hr [] [] ]
      ++ options controlKeys
      )

