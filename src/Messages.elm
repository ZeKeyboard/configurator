module Messages exposing (Msg(..))

import Keyboard exposing (Action, Key, KeyCode)
import File exposing (File)
import Language exposing (Language)


type Msg
  = KeyClicked Key
  | CreateAction Key
  | ResetAction Key
  | SetKeyAction Key Action
  | SetLayer Int
  | SetLayerModifier Key KeyCode
  | Export
  | Save
  | FileRead String
  | Open File
  | ChangeName String
  | SelectProjectFile
  | DragEnter
  | DragLeave
  | DroppedFiles File (List File)
  | UpdateIntegerSetting Int Int Int String
  | UpdateBooleanSetting Int Bool
  | SetLanguage Language
