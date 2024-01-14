module KeyCodes exposing (keyCodeToString)

import Dict exposing (Dict)
import Bitwise exposing (..)


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


keyCodes : Dict Int String
keyCodes =
    Dict.fromList
      [ ((or 0x01 modifierKeyCode), "LCtrl"      )
      , ((or 0x02 modifierKeyCode), "LShift"     )
      , ((or 0x04 modifierKeyCode), "LAlt"       )
      , ((or 0x08 modifierKeyCode), "LGui"       )
      , ((or 0x10 modifierKeyCode), "RCtrl"      )
      , ((or 0x20 modifierKeyCode), "RShift"     )
      , ((or 0x40 modifierKeyCode), "RAlt"       )
      , ((or 0x80 modifierKeyCode), "RGui"       )
      , ((or 0x81   systemKeyCode), "PowerDown"  )
      , ((or 0x82   systemKeyCode), "Sleep"      )
      , ((or 0x83   systemKeyCode), "WakeUp"     )
      , ((or 0xB0    mediaKeyCode), "Play"       )
      , ((or 0xB1    mediaKeyCode), "Pause"      )
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
      , ((or 84   standardKeyCode), "/"          )
      , ((or 85   standardKeyCode), "*"          )
      , ((or 86   standardKeyCode), "-"          )
      , ((or 87   standardKeyCode), "+"          )
      , ((or 88   standardKeyCode), "Enter"      )
      , ((or 89   standardKeyCode), "1"          )
      , ((or 90   standardKeyCode), "2"          )
      , ((or 91   standardKeyCode), "3"          )
      , ((or 92   standardKeyCode), "4"          )
      , ((or 93   standardKeyCode), "5"          )
      , ((or 94   standardKeyCode), "6"          )
      , ((or 95   standardKeyCode), "7"          )
      , ((or 96   standardKeyCode), "8"          )
      , ((or 97   standardKeyCode), "9"          )
      , ((or 98   standardKeyCode), "0"          )
      , ((or 99   standardKeyCode), "."          )
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
      ]

keyCodeToString : Int -> String
keyCodeToString keyCode =
    case Dict.get keyCode keyCodes of
      Just str ->
        str

      Nothing ->
        ""
