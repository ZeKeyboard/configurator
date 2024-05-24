module LayoutJSONDecoder exposing (decodeLayout)

import Json.Decode as Decode
import Keyboard exposing (Layout, Layers, Key, KeyPress, KeyActions(..), Action(..), KeyCode)


decodeLayout : String -> Result String Layout
decodeLayout json =
  let
    result =
      Decode.decodeString layoutDecoder json
  in
    case result of
      Ok layout ->
        Ok layout

      Err err ->
        Err (Decode.errorToString err)


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
