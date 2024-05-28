module Messages exposing (Msg(..))

import Keyboard exposing (Action, Key, KeyCode)
import File exposing (File)


type Msg
  = KeyClicked Key
  | CreateAction Key
  | SetKeyAction Key Action
  | SetLayer Int
  | SetLayerModifier Key KeyCode
  | Export
  | Save
  | FileRead String
  | Open File
  | ChangeName String
  | SelectProjectFile
