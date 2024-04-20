module Messages exposing (Msg(..))

import Keyboard exposing (Action, Key, KeyCode)


type Msg
  = KeyClicked Key
  | CreateAction Key
  | SetKeyAction Key Action
  | SetLayer Int
  | SetLayerModifier Key KeyCode
  | Download
