module KeyCodes exposing (..)

import Dict exposing (Dict)
import Bitwise exposing (..)
import Html.Events exposing (keyCode)


standardKeyCode : Int
standardKeyCode =
  0xF000


modifierKeyCode : Int
modifierKeyCode =
  0xE000


systemKeyCode : Int
systemKeyCode =
  0xE200


mediaKeyCode : Int
mediaKeyCode =
  0xE400


controlKeyCode : Int
controlKeyCode =
  0xD000


layerHoldModifierKeyCode : Int
layerHoldModifierKeyCode =
  0xC000


layerToggleModifierKeyCode : Int
layerToggleModifierKeyCode =
  0xB000


mouseKeyCode : Int
mouseKeyCode =
  0xA000


blankStandardKeyCode : Int
blankStandardKeyCode =
  standardKeyCode


blankModifierKeyCode : Int
blankModifierKeyCode =
  modifierKeyCode


blankSystemKeyCode : Int
blankSystemKeyCode =
  systemKeyCode


blankMediaKeyCode : Int
blankMediaKeyCode =
  mediaKeyCode


isStandardKeyCode : Int -> Bool
isStandardKeyCode keyCode =
  (and keyCode 0xFF00) == standardKeyCode


isModifierKeyCode : Int -> Bool
isModifierKeyCode keyCode =
  (and keyCode 0xFF00) == modifierKeyCode


isSystemKeyCode : Int -> Bool
isSystemKeyCode keyCode =
  (and keyCode 0xFF00) == systemKeyCode


isMediaKeyCode : Int -> Bool
isMediaKeyCode keyCode =
  (and keyCode 0xFF00) == mediaKeyCode


isLayerHoldModifierKeyCode : Int -> Bool
isLayerHoldModifierKeyCode keyCode =
  (and keyCode 0xFF00) == layerHoldModifierKeyCode


isLayerToggleModifierKeyCode : Int -> Bool
isLayerToggleModifierKeyCode keyCode =
  (and keyCode 0xFF00) == layerToggleModifierKeyCode


isMouseKeyCode : Int -> Bool
isMouseKeyCode keyCode =
  (and keyCode 0xFF00) == mouseKeyCode


isControlKeyCode : Int -> Bool
isControlKeyCode keyCode =
  (and keyCode 0xFF00) == controlKeyCode


isStandardLayerControlOrMouseCode : Int -> Bool
isStandardLayerControlOrMouseCode keyCode =
  (isStandardKeyCode keyCode) || 
  (isLayerHoldModifierKeyCode keyCode) ||
  (isLayerToggleModifierKeyCode keyCode) ||
  (isControlKeyCode keyCode) ||
  (isMouseKeyCode keyCode)


asciiKeyCodes : Dict Char Int
asciiKeyCodes =
  Dict.fromList
    [ ('a', or standardKeyCode  4)
    , ('b', or standardKeyCode  5)
    , ('c', or standardKeyCode  6)
    , ('d', or standardKeyCode  7)
    , ('e', or standardKeyCode  8)
    , ('f', or standardKeyCode  9)
    , ('g', or standardKeyCode  10)
    , ('h', or standardKeyCode  11)
    , ('i', or standardKeyCode  12)
    , ('j', or standardKeyCode  13)
    , ('k', or standardKeyCode  14)
    , ('l', or standardKeyCode  15)
    , ('m', or standardKeyCode  16)
    , ('n', or standardKeyCode  17)
    , ('o', or standardKeyCode  18)
    , ('p', or standardKeyCode  19)
    , ('q', or standardKeyCode  20)
    , ('r', or standardKeyCode  21)
    , ('s', or standardKeyCode  22)
    , ('t', or standardKeyCode  23)
    , ('u', or standardKeyCode  24)
    , ('v', or standardKeyCode  25)
    , ('w', or standardKeyCode  26)
    , ('x', or standardKeyCode  27)
    , ('y', or standardKeyCode  28)
    , ('z', or standardKeyCode  29)
    , ('1', or standardKeyCode  30)
    , ('2', or standardKeyCode  31)
    , ('3', or standardKeyCode  32)
    , ('4', or standardKeyCode  33)
    , ('5', or standardKeyCode  34)
    , ('6', or standardKeyCode  35)
    , ('7', or standardKeyCode  36)
    , ('8', or standardKeyCode  37)
    , ('9', or standardKeyCode  38)
    , ('0', or standardKeyCode  39)
    , ('\n', or standardKeyCode 40)
    , (' ', or standardKeyCode  44)
    , ('-', or standardKeyCode  45)
    , ('=', or standardKeyCode  46)
    , ('[', or standardKeyCode  47)
    , (']', or standardKeyCode  48)
    , ('\\', or standardKeyCode 49)
    , (';', or standardKeyCode  51)
    , ('\'', or standardKeyCode 52)
    , ('`', or standardKeyCode  53)
    , (',', or standardKeyCode  54)
    , ('.', or standardKeyCode  55)
    , ('/', or standardKeyCode  56)
    ]


asciiCharToKeyCode : Char -> Maybe Int
asciiCharToKeyCode char =
  Dict.get char asciiKeyCodes


keyCodes : Dict Int String
keyCodes =
  Dict.fromList
    [ ((or 0x01 modifierKeyCode), "Left Ctrl"       )
    , ((or 0x02 modifierKeyCode), "Left Shift"      )
    , ((or 0x04 modifierKeyCode), "Left Alt"        )
    , ((or 0x08 modifierKeyCode), "Left Gui"        )
    , ((or 0x10 modifierKeyCode), "Right Ctrl"      )
    , ((or 0x20 modifierKeyCode), "Right Shift"     )
    , ((or 0x40 modifierKeyCode), "Right Alt"       )
    , ((or 0x80 modifierKeyCode), "Right Gui"       )
    -- System keys are not currently supported
    -- , ((or 0x81   systemKeyCode), "PowerDown"  )
    -- , ((or 0x82   systemKeyCode), "Sleep"      )
    -- , ((or 0x83   systemKeyCode), "WakeUp"     )
    , ((or 0xB0    mediaKeyCode), "Play"       )
    , ((or 0xB1    mediaKeyCode), "MediaPause" )
    , ((or 0xB2    mediaKeyCode), "Record"     )
    , ((or 0xB3    mediaKeyCode), "FastForward")
    , ((or 0xB4    mediaKeyCode), "Rewind"     )
    , ((or 0xB5    mediaKeyCode), "NextTrack"  )
    , ((or 0xB6    mediaKeyCode), "PrevTrack"  )
    , ((or 0xB7    mediaKeyCode), "Stop"       )
    , ((or 0xB8    mediaKeyCode), "Eject"      )
    , ((or 0xB9    mediaKeyCode), "RandomPlay" )
    , ((or 0xCD    mediaKeyCode), "PlayPause"  )
    , ((or 0xCE    mediaKeyCode), "PlaySkip"   )
    , ((or 0xE2    mediaKeyCode), "Mute"       )
    , ((or 0xE9    mediaKeyCode), "VolumeInc"  )
    , ((or 0xEA    mediaKeyCode), "VolumeDec"  )
    , ((or 4    standardKeyCode), "A"          )
    , ((or 5    standardKeyCode), "B"          )
    , ((or 6    standardKeyCode), "C"          )
    , ((or 7    standardKeyCode), "D"          )
    , ((or 8    standardKeyCode), "E"          )
    , ((or 9    standardKeyCode), "F"          )
    , ((or 10   standardKeyCode), "G"          )
    , ((or 11   standardKeyCode), "H"          )
    , ((or 12   standardKeyCode), "I"          )
    , ((or 13   standardKeyCode), "J"          )
    , ((or 14   standardKeyCode), "K"          )
    , ((or 15   standardKeyCode), "L"          )
    , ((or 16   standardKeyCode), "M"          )
    , ((or 17   standardKeyCode), "N"          )
    , ((or 18   standardKeyCode), "O"          )
    , ((or 19   standardKeyCode), "P"          )
    , ((or 20   standardKeyCode), "Q"          )
    , ((or 21   standardKeyCode), "R"          )
    , ((or 22   standardKeyCode), "S"          )
    , ((or 23   standardKeyCode), "T"          )
    , ((or 24   standardKeyCode), "U"          )
    , ((or 25   standardKeyCode), "V"          )
    , ((or 26   standardKeyCode), "W"          )
    , ((or 27   standardKeyCode), "X"          )
    , ((or 28   standardKeyCode), "Y"          )
    , ((or 29   standardKeyCode), "Z"          )
    , ((or 30   standardKeyCode), "1"          )
    , ((or 31   standardKeyCode), "2"          )
    , ((or 32   standardKeyCode), "3"          )
    , ((or 33   standardKeyCode), "4"          )
    , ((or 34   standardKeyCode), "5"          )
    , ((or 35   standardKeyCode), "6"          )
    , ((or 36   standardKeyCode), "7"          )
    , ((or 37   standardKeyCode), "8"          )
    , ((or 38   standardKeyCode), "9"          )
    , ((or 39   standardKeyCode), "0"          )
    , ((or 40   standardKeyCode), "Enter"      )
    , ((or 41   standardKeyCode), "Esc"        )
    , ((or 42   standardKeyCode), "Backspace"  )
    , ((or 43   standardKeyCode), "Tab"        )
    , ((or 44   standardKeyCode), "Space"      )
    , ((or 45   standardKeyCode), "-"          )
    , ((or 46   standardKeyCode), "="          )
    , ((or 47   standardKeyCode), "["          )
    , ((or 48   standardKeyCode), "]"          )
    , ((or 49   standardKeyCode), "\\"         )
    , ((or 50   standardKeyCode), "NonUsNum"   )
    , ((or 51   standardKeyCode), ";"          )
    , ((or 52   standardKeyCode), "'"          )
    , ((or 53   standardKeyCode), "~"          )
    , ((or 54   standardKeyCode), ","          )
    , ((or 55   standardKeyCode), "."          )
    , ((or 56   standardKeyCode), "/"          )
    , ((or 57   standardKeyCode), "CapsLock"   )
    , ((or 58   standardKeyCode), "F1"         )
    , ((or 59   standardKeyCode), "F2"         )
    , ((or 60   standardKeyCode), "F3"         )
    , ((or 61   standardKeyCode), "F4"         )
    , ((or 62   standardKeyCode), "F5"         )
    , ((or 63   standardKeyCode), "F6"         )
    , ((or 64   standardKeyCode), "F7"         )
    , ((or 65   standardKeyCode), "F8"         )
    , ((or 66   standardKeyCode), "F9"         )
    , ((or 67   standardKeyCode), "F10"        )
    , ((or 68   standardKeyCode), "F11"        )
    , ((or 69   standardKeyCode), "F12"        )
    , ((or 70   standardKeyCode), "PrintScreen")
    , ((or 71   standardKeyCode), "ScrollLock" )
    , ((or 72   standardKeyCode), "Pause"      )
    , ((or 73   standardKeyCode), "Insert"     )
    , ((or 74   standardKeyCode), "Home"       )
    , ((or 75   standardKeyCode), "PageUp"     )
    , ((or 76   standardKeyCode), "Delete"     )
    , ((or 77   standardKeyCode), "End"        )
    , ((or 78   standardKeyCode), "PageDown"   )
    , ((or 79   standardKeyCode), "Right"      )
    , ((or 80   standardKeyCode), "Left"       )
    , ((or 81   standardKeyCode), "Down"       )
    , ((or 82   standardKeyCode), "Up"         )
    , ((or 83   standardKeyCode), "NumLock"    )
    , ((or 84   standardKeyCode), "Num /"      )
    , ((or 85   standardKeyCode), "Num *"      )
    , ((or 86   standardKeyCode), "Num -"      )
    , ((or 87   standardKeyCode), "Num +"      )
    , ((or 88   standardKeyCode), "Num Enter"  )
    , ((or 89   standardKeyCode), "Num 1"      )
    , ((or 90   standardKeyCode), "Num 2"      )
    , ((or 91   standardKeyCode), "Num 3"      )
    , ((or 92   standardKeyCode), "Num 4"      )
    , ((or 93   standardKeyCode), "Num 5"      )
    , ((or 94   standardKeyCode), "Num 6"      )
    , ((or 95   standardKeyCode), "Num 7"      )
    , ((or 96   standardKeyCode), "Num 8"      )
    , ((or 97   standardKeyCode), "Num 9"      )
    , ((or 98   standardKeyCode), "Num 0"      )
    , ((or 99   standardKeyCode), "Num ."      )
    , ((or 100  standardKeyCode), "<>"         )
    , ((or 101  standardKeyCode), "Menu"       )
    , ((or 104  standardKeyCode), "F13"        )
    , ((or 105  standardKeyCode), "F14"        )
    , ((or 106  standardKeyCode), "F15"        )
    , ((or 107  standardKeyCode), "F16"        )
    , ((or 108  standardKeyCode), "F17"        )
    , ((or 109  standardKeyCode), "F18"        )
    , ((or 110  standardKeyCode), "F19"        )
    , ((or 111  standardKeyCode), "F20"        )
    , ((or 112  standardKeyCode), "F21"        )
    , ((or 113  standardKeyCode), "F22"        )
    , ((or 114  standardKeyCode), "F23"        )
    , ((or 115  standardKeyCode), "F24"        )

    -- Mouse controls
    , ((or 116  mouseKeyCode), "Mouse Left Click"   )
    , ((or 117  mouseKeyCode), "Mouse Right Click"  )
    , ((or 118  mouseKeyCode), "Mouse Middle Click" )
    , ((or 119  mouseKeyCode), "Mouse Scroll Up"    )
    , ((or 120  mouseKeyCode), "Mouse Scroll Down"  )
    , ((or 121  mouseKeyCode), "Mouse Move Left"    )
    , ((or 122  mouseKeyCode), "Mouse Move Right"   )
    , ((or 123  mouseKeyCode), "Mouse Move Up"      )
    , ((or 124  mouseKeyCode), "Mouse Move Down"    )
    , ((or 125  mouseKeyCode), "Mouse Move Faster"  )

    -- Control key codes
    , ((or 126    controlKeyCode), "Brightness increase" )
    , ((or 127    controlKeyCode), "Brightness decrease" )
    , ((or 128    controlKeyCode), "Toggle configuration mode" )
    , ((or 129    controlKeyCode), "Next backlight mode" )
    ]


layerModifierCodes : Dict Int String
layerModifierCodes =
  Dict.fromList
    [ ((or 130    layerHoldModifierKeyCode), "Layer Hold 1" )
    , ((or 131    layerHoldModifierKeyCode), "Layer Hold 2" )

    , ((or 133    layerToggleModifierKeyCode), "Layer Toggle 1" )
    , ((or 134    layerToggleModifierKeyCode), "Layer Toggle 2" )
    ]


reverseDict : Dict Int String -> Dict String Int
reverseDict dict =
  Dict.fromList (List.map (\(k, v) -> (v, k)) (Dict.toList dict))


keyCodesFromString : Dict String Int
keyCodesFromString =
  reverseDict keyCodes


layerModifierCodesFromString : Dict String Int
layerModifierCodesFromString =
  reverseDict layerModifierCodes


layerModifierCodeFromString : String -> Maybe Int
layerModifierCodeFromString str =
    Dict.get str layerModifierCodesFromString


keyCodeToString : Int -> String
keyCodeToString keyCode =
    case Dict.get keyCode keyCodes of
      Just str ->
        str

      Nothing ->
        ""


layerModifierCodeToString : Int -> String
layerModifierCodeToString keyCode =
    case Dict.get keyCode layerModifierCodes of
      Just str ->
        str

      Nothing ->
        ""


keyCodeFromString : String -> Maybe Int
keyCodeFromString str =
    Dict.get str keyCodesFromString
