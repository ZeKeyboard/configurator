module LayoutJSONDecoder exposing (decodeModel)

import Json.Decode as Decode
import Keyboard exposing (Layout, Layers, Key, KeyPress, KeyActions(..), Action(..), KeyCode)
import Model exposing (Model)
import Settings exposing (Settings, SettingsGroup)
import Settings exposing (SettingsField)
import Settings exposing (SettingsField(..))
import Language exposing (Language)


decodeModel : String -> String -> Result String Model
decodeModel json name =
  let
    result =
      Decode.decodeString (modelDecoder name) json
  in
    case result of
      Ok model ->
        Ok model

      Err err ->
        Err (Decode.errorToString err)


modelDecoder : String -> Decode.Decoder Model
modelDecoder name =
  Decode.map7 Model
    (Decode.field "layout" layoutDecoder)
    (Decode.field "settings" settingsDecoder)
    (Decode.succeed 0)
    (Decode.succeed Nothing)
    (Decode.succeed name)
    (Decode.succeed False)
    (Decode.succeed Language.English)


settingsDecoder : Decode.Decoder Settings
settingsDecoder =
  Decode.list settingsGroupDecoder


settingsGroupDecoder : Decode.Decoder SettingsGroup
settingsGroupDecoder =
  Decode.map2 SettingsGroup
    (Decode.field "name" Decode.string)
    (Decode.field "settings" settingsTupleListDecoder)


settingsTupleListDecoder : Decode.Decoder (List (Int, String, SettingsField))
settingsTupleListDecoder =
  Decode.list settingsTupleDecoder


settingsTupleDecoder : Decode.Decoder (Int, String, SettingsField)
settingsTupleDecoder =
  Decode.map3 (\a b c -> (a, b, c))
    (Decode.field "id" Decode.int)
    (Decode.field "name" Decode.string)
    (Decode.field "field" settingsFieldDecoder)


settingsFieldDecoder : Decode.Decoder SettingsField
settingsFieldDecoder =
  Decode.oneOf
    [ integerSettingsFieldDecoder
    , booleanSettingsFieldDecoder
    ]


integerSettingsFieldDecoder : Decode.Decoder SettingsField
integerSettingsFieldDecoder =
  Decode.map3 IntegerField
    (Decode.field "value" Decode.int)
    (Decode.field "min" Decode.int)
    (Decode.field "max" Decode.int)


booleanSettingsFieldDecoder : Decode.Decoder SettingsField
booleanSettingsFieldDecoder =
  Decode.map BooleanField
    (Decode.field "value" Decode.bool)


layoutDecoder : Decode.Decoder Layout
layoutDecoder =
  Decode.list keyDecoder


keyDecoder : Decode.Decoder Key
keyDecoder =
  Decode.map8 Key
    (Decode.field "id" Decode.int)
    (Decode.field "row" Decode.int)
    (Decode.field "col" Decode.int)
    (Decode.field "x" Decode.float)
    (Decode.field "y" Decode.float)
    (Decode.field "height" Decode.float)
    (Decode.field "width" Decode.float)
    (Decode.field "actions" keyActionsDecoder)


keyActionsDecoder : Decode.Decoder KeyActions
keyActionsDecoder =
  Decode.oneOf
    [ Decode.field "layerModifier" keyCodeDecoder |> Decode.map LayerModifier
    , layersDecoder |> Decode.map LayerAction
    ]


layersDecoder : Decode.Decoder Layers
layersDecoder =
  Decode.map3 Layers
    (Decode.field "actionLayer1" maybeActionDecoder)
    (Decode.field "actionLayer2" maybeActionDecoder)
    (Decode.field "actionLayer3" maybeActionDecoder)


maybeActionDecoder : Decode.Decoder (Maybe Action)
maybeActionDecoder =
  Decode.nullable actionDecoder


actionDecoder : Decode.Decoder Action
actionDecoder =
  Decode.oneOf
    [ singleKeyCodeDecoder
    , sequenceDecoder
    , freeTextDecoder
    ]


singleKeyCodeDecoder : Decode.Decoder Action
singleKeyCodeDecoder =
  Decode.map Single keyCodeDecoder


sequenceDecoder : Decode.Decoder Action
sequenceDecoder =
  Decode.map3 Sequence
    (Decode.field "rawString" Decode.string)
    (Decode.field "presses" keypressListDecoder)
    (Decode.field "error" Decode.string |> Decode.nullable)


keypressListDecoder : Decode.Decoder (List KeyPress)
keypressListDecoder =
  Decode.list keypressDecoder


keypressDecoder : Decode.Decoder KeyPress
keypressDecoder =
  Decode.map3 KeyPress
    (Decode.field "keyCode" keyCodeDecoder)
    (Decode.field "modifier" keyCodeDecoder)
    (Decode.field "media" keyCodeDecoder)


freeTextDecoder : Decode.Decoder Action
freeTextDecoder =
  Decode.map FreeText Decode.string


keyCodeDecoder : Decode.Decoder KeyCode
keyCodeDecoder =
  Decode.int
