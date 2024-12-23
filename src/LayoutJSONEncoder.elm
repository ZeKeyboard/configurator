module LayoutJSONEncoder exposing (encodeModel)

import Json.Encode as Encode
import Keyboard exposing (Layout, Key, KeyPress, KeyActions(..), Action(..), KeyCode)
import Settings exposing (Settings, SettingsGroup, SettingsField)
import Settings exposing (SettingsField(..))
import Model exposing (Model)


encodeModel : Model -> String
encodeModel model =
  Encode.encode 4
    (Encode.object
      [ ("layout", encodeLayout model.layout)
      , ("settings", encodeSettings model.settings)
      ])


encodeLayout : Layout -> Encode.Value
encodeLayout layout =
  Encode.list encodeKey layout


encodeKey : Key -> Encode.Value
encodeKey key =
  Encode.object
    [ ("id", Encode.int key.id)
    , ("x", Encode.float key.x)
    , ("y", Encode.float key.y)
    , ("row", Encode.int key.row)
    , ("col", Encode.int key.col)
    , ("height", Encode.float key.height)
    , ("width", Encode.float key.width)
    , ("actions", encodeKeyActions key.actions)
    ]


encodeKeyActions : KeyActions -> Encode.Value
encodeKeyActions actions =
  case actions of
    LayerModifier code ->
      Encode.object
        [ ("layerModifier", Encode.int code)
        ]
    LayerAction layers ->
      Encode.object
        [ ("actionLayer1", encodeMaybeAction layers.actionLayer1 )
        , ("actionLayer2", encodeMaybeAction layers.actionLayer2 )
        , ("actionLayer3", encodeMaybeAction layers.actionLayer3 )
        ]


encodeMaybeAction : Maybe Action -> Encode.Value
encodeMaybeAction maybeAction =
  case maybeAction of
    Just action ->
      case action of
        Single code ->
          encodeSingleCode code
        Sequence rawString presses error ->
          encodeSequence rawString presses error
        FreeText text ->
          encodeFreeText text

    Nothing ->
      Encode.null


encodeSingleCode : KeyCode -> Encode.Value
encodeSingleCode code =
  Encode.int code


encodeSequence : String -> (List KeyPress) -> Maybe String -> Encode.Value
encodeSequence rawString presses maybeError =
  let
    error =
      case maybeError of
        Just err ->
          Encode.string err
        Nothing ->
          Encode.null
  in
    Encode.object
      [ ("rawString", Encode.string rawString)
      , ("presses", Encode.list encodeKeyPress presses)
      , ("error", error)
      ]


encodeKeyPress : KeyPress -> Encode.Value
encodeKeyPress press =
  Encode.object
    [ ("key", Encode.int press.key)
    , ("modifier", Encode.int press.modifier)
    , ("media", Encode.int press.media)
    ]


encodeFreeText : String -> Encode.Value
encodeFreeText text =
  Encode.string text


encodeSettings : Settings -> Encode.Value
encodeSettings settings =
  Encode.list encodeSettingsGroup settings


encodeSettingsGroup : SettingsGroup -> Encode.Value
encodeSettingsGroup group =
  Encode.object
    [ ("name", Encode.string group.name)
    , ("settings", encodeSettingsList group.settings)
    ]


encodeSettingsList : List (Int, String, SettingsField) -> Encode.Value
encodeSettingsList settings =
  Encode.list encodeSettingsTuple settings


encodeSettingsTuple : (Int, String, SettingsField) -> Encode.Value
encodeSettingsTuple (id, name, field) =
  Encode.object
    [ ("id", Encode.int id)
    , ("name", Encode.string name)
    , ("field", encodeSettingsField field)
    ]


encodeSettingsField : SettingsField -> Encode.Value
encodeSettingsField field =
  case field of
    IntegerField value min max->
      Encode.object
        [ ("value", Encode.int value)
        , ("min", Encode.int min)
        , ("max", Encode.int max)
        ]
    BooleanField value ->
      Encode.object
        [ ("value", Encode.bool value) ]
    EnumField value options ->
      Encode.object
        [ ("value", Encode.int value)
        , ("options", Encode.list Encode.string options )]

