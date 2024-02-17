module Messages exposing (Msg(..))

import Keyboard exposing (Action, Key)

type Msg
  = KeyClicked Key
  | CreateAction Key
  | SetKeyAction Key Action
  | Download
