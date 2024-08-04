module KeyboardSerializer exposing (serializeLayout, serializeSettings)

import Bytes exposing (Bytes)
import Bytes.Encode as Encode
import Keyboard exposing (Key, Layout, KeyCode, KeyPress, Action)
import Bitwise
import KeyCodes
import Keyboard exposing (KeyActions(..))
import Settings exposing (Settings)
import Settings exposing (SettingsGroup)
import Settings exposing (SettingsField(..))


settingsStartWord : String
settingsStartWord = "DEADBEEFDEADBEEF"


byteToHexAscii : Int -> String
byteToHexAscii byte =
  let
    lowBits =
      Bitwise.and 0x0F byte

    highBits =
      Bitwise.shiftRightBy 4 byte

    intToHexChar value =
      Char.fromCode (if value < 10 then 0x30 + value else 0x41 + value - 10)
  in
    String.fromList [ intToHexChar highBits, intToHexChar lowBits ]


encodeUint16AsAscii : Int -> String
encodeUint16AsAscii value =
  let
    lowByte =
      Bitwise.and 0xFF value

    highByte =
      Bitwise.shiftRightBy 8 value
  in
    byteToHexAscii highByte ++ byteToHexAscii lowByte


encodeKey : Key -> List Int
encodeKey key =
  let
    encodeLayerModifierAction code =
      [ 0
      , key.row
      , key.col
      ] ++ (encodeSingleAction code)
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
    case key.actions of
      LayerModifier code ->
        encodeLayerModifierAction code
      LayerAction layers ->
        (encodeMaybeAction layers.actionLayer1 0)
        ++ (encodeMaybeAction layers.actionLayer2 1)
        ++ (encodeMaybeAction layers.actionLayer3 2)


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


serializeLayout : Layout -> String
serializeLayout layout =
  let
    numKeys =
      List.foldl (\key sum ->
        let
          countMaybe maybeAction =
            case maybeAction of
              Just _ -> 1
              Nothing -> 0
        in
          case key.actions of
            LayerModifier _ -> sum + 1
            LayerAction layers ->
              sum + (countMaybe layers.actionLayer1)
                  + (countMaybe layers.actionLayer2)
                  + (countMaybe layers.actionLayer3)
        ) 0 layout

    keysIntSequence =
      List.concatMap encodeKey layout

    keysCheckSum =
      Basics.modBy 65500 (List.sum keysIntSequence)

    keysBytes =
      [ encodeUint16AsAscii numKeys, encodeUint16AsAscii keysCheckSum ]
        ++ (List.map encodeUint16AsAscii keysIntSequence)
  in
    String.concat keysBytes


serializeSettings : Settings -> String
serializeSettings settings =
  let
    settingsList = List.map serializeSettingsGroup settings
    settingsListFlat = List.concat settingsList
    numSettings = (List.length settingsListFlat) // 2
    checkSum = Basics.modBy 65500 (List.sum settingsListFlat)
    settingsAscii = List.map encodeUint16AsAscii settingsListFlat
  in
    settingsStartWord
    ++ encodeUint16AsAscii numSettings
    ++ encodeUint16AsAscii checkSum
    ++ (String.concat settingsAscii)


serializeSettingsGroup : SettingsGroup -> List Int
serializeSettingsGroup group =
  let
    settingsList =
      List.concatMap serializeSetting group.settings
  in
    settingsList


serializeSetting : (Int, String, SettingsField) -> List Int
serializeSetting (settingNumber, _, field) =
  let
    value = case field of
      IntegerField v _ _ -> v
      BooleanField v -> if v then 1 else 0
  in
    [ settingNumber, value ]
