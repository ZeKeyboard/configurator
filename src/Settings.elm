module Settings exposing (..)

type SettingsField
  = IntegerField Int Int Int  -- value, min, max
  | BooleanField Bool


type alias SettingsGroup =
  { name : String
  , settings : List (Int, String, SettingsField) -- setting number, name, field
  }


type alias Settings = List SettingsGroup


initialSettings : Settings
initialSettings =
  let
    mouseSettings =
      [ (0, "Mouse speed",             IntegerField 5 1 10)
      , (1, "Mouse acceleration",      IntegerField 3 0 10)
      ]
    backlightSettings =
      [ (2, "Highlight keys on layer", BooleanField True)
      ]
  in
    [
      { name = "Mouse"
      , settings = mouseSettings
      },
      { name = "Backlight"
      , settings = backlightSettings
      }
    ]


updateIntegerSetting : Int -> Int -> Int -> Int -> Settings -> Settings
updateIntegerSetting settingNumber value minValue maxValue oldSettings =
  List.map
    (\group ->
      { group | settings =
        List.map
          (\(n, name, field) ->
            if n == settingNumber then
              (n, name, IntegerField value minValue maxValue)
            else
              (n, name, field))
          group.settings }) oldSettings


updateBooleanSetting : Int -> Bool -> Settings -> Settings
updateBooleanSetting settingNumber value oldSettings =
  List.map
    (\group ->
      { group | settings =
        List.map
          (\(n, name, field) ->
            if n == settingNumber then
              (n, name, BooleanField value)
            else
              (n, name, field))
          group.settings }) oldSettings

