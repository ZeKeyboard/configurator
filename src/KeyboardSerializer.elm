module KeyboardSerializer exposing (serializeLayout)

import Bytes exposing (Bytes)
import Bytes.Encode as Encode
import Keyboard exposing (Key, Layout, KeyCode, KeyPress, Action)
import KeyCodes


encodeUint16 : Int -> Encode.Encoder
encodeUint16 value =
  Encode.unsignedInt16 Bytes.LE value


encodeKey : Key -> List Int
encodeKey key =
  let
    encodeMaybeAction maybeAction layer =
      case maybeAction of
        Just action ->
          [ layer
          , key.row
          , key.col
          ] ++ (encodeAction action)

        Nothing ->
          [ ]
  in
    (encodeMaybeAction key.actionLayer1 0)
    ++ (encodeMaybeAction key.actionLayer2 1)
    ++ (encodeMaybeAction key.actionLayer3 2)


encodeAction : Action -> List Int
encodeAction action =
  case action of
    Keyboard.Sequence _ keyPresses _ ->
      encodeSequence keyPresses

    Keyboard.Single keyCode ->
      encodeSingleAction keyCode

    Keyboard.FreeText text ->
      encodeFreetext text


encodeSingleAction : KeyCode -> List Int
encodeSingleAction keyCode =
  let
    length =
      1

    standardKey =
      if KeyCodes.isStandardLayerControlOrMouseCode keyCode then
        keyCode
      else
        KeyCodes.blankStandardKeyCode

    modifierKey =
      if KeyCodes.isModifierKeyCode keyCode then
        keyCode
      else
        KeyCodes.blankModifierKeyCode

    mediaKey =
      if KeyCodes.isMediaKeyCode keyCode then
        keyCode
      else
        KeyCodes.blankMediaKeyCode

  in
    [ length
    , standardKey
    , modifierKey
    , mediaKey
    ]


encodeSequenceElement : KeyPress -> List Int
encodeSequenceElement keyPress =
  [ keyPress.key
  , keyPress.modifier
  , keyPress.media
  ]


encodeSequence : List KeyPress -> List Int
encodeSequence keyPresses =
  let
    length =
      List.length keyPresses

    elements =
      List.concatMap encodeSequenceElement keyPresses
  in
    length :: elements


charToKeyPress : Char -> Maybe KeyPress
charToKeyPress char =
  let
    modifier =
      if Char.isUpper char then
        0xE002  -- Shift
      else
        KeyCodes.blankModifierKeyCode

    lowerChar =
      Char.toLower char

    maybeKeyCode =
      KeyCodes.asciiCharToKeyCode lowerChar

  in
    Maybe.map (\k -> 
      { key = k
      , modifier = modifier
      , media = KeyCodes.blankMediaKeyCode
      }) maybeKeyCode


stringToKeyPressList : String -> List KeyPress
stringToKeyPressList str =
  String.toList str |> List.filterMap charToKeyPress


encodeFreetext : String -> List Int
encodeFreetext text =
  let
    keyPresses =
      stringToKeyPressList text
  in
    encodeSequence keyPresses


serializeLayout : Layout -> Bytes
serializeLayout layout =
  let
    numKeys =
      List.foldl (\keyPress sum ->
        let
          countMaybe maybeAction =
            case maybeAction of
              Just _ -> 1
              Nothing -> 0
        in
          sum + (countMaybe keyPress.actionLayer1)
              + (countMaybe keyPress.actionLayer2)
              + (countMaybe keyPress.actionLayer3)
        ) 0 layout

    keysIntSequence =
      List.concatMap encodeKey layout
    
    keysCheckSum =
      Basics.modBy 65500 (List.sum keysIntSequence)

    keysBytes =
      Encode.sequence
        <| [ encodeUint16 numKeys, encodeUint16 keysCheckSum ]
          ++ (List.map encodeUint16 keysIntSequence)

  in
    Encode.encode keysBytes
