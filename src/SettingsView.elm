module SettingsView exposing (settingsView)

import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick, onCheck)
import Html.Styled.Attributes exposing (css, for, name, value, class, selected, type_, min, max)
import Html.Styled.Events exposing (onInput)
import Messages exposing (Msg(..))

import Settings exposing (..)


settingsView : Settings -> Html Msg
settingsView settings =
  div [ class "whiteText" ] (List.map settingsGroupView settings)


settingsGroupView : SettingsGroup -> Html Msg
settingsGroupView settingsGroup =
  div [] [ h3 [] [ text settingsGroup.name ]
         , div [] (List.map settingsFieldView settingsGroup.settings)
         ]


settingsFieldView : (Int, String, SettingsField) -> Html Msg
settingsFieldView settingsField =
  let
    (settingNumber, name, field) = settingsField

    fieldView = case field of
      IntegerField settingValue minValue maxValue ->
        integerSettingsFieldView settingNumber name settingValue minValue maxValue
      BooleanField settingValue ->
        booleanSettingsFieldView settingNumber name settingValue
      EnumField settingValue strOptions ->
        enumSettingsFieldView settingNumber name settingValue strOptions
  in
    fieldView


integerSettingsFieldView : Int -> String -> Int -> Int -> Int -> Html Msg
integerSettingsFieldView settingNumber settingName settingValue minValue maxValue =
  let
    numStr = (String.fromInt settingNumber)
  in
    div [] [ label [ for numStr ] [ text (settingName ++ ": ") ]
           , input [ class "integerSpinner"
                   , type_ "number"
                   , value (String.fromInt settingValue)
                   , name numStr
                   , Html.Styled.Attributes.min (String.fromInt minValue)
                   , Html.Styled.Attributes.max (String.fromInt maxValue)
                   , onInput (UpdateIntegerSetting settingNumber minValue maxValue)
                   ] [ ]
    ]


booleanSettingsFieldView : Int -> String -> Bool -> Html Msg
booleanSettingsFieldView settingNumber settingName settingValue =
  let
    numStr = (String.fromInt settingNumber)
    checked = Html.Styled.Attributes.checked settingValue
  in
    div [] [ label [ for numStr ] [ text (settingName ++ ": ") ]
           , input [ type_ "checkbox"
                   , name numStr
                   , checked
                   , onCheck (UpdateBooleanSetting settingNumber)
                   ] [ ]
    ]


enumSettingsFieldView : Int -> String -> Int -> List String -> Html Msg
enumSettingsFieldView settingNumber settingName settingValue strOptions =
  let
    numStr = (String.fromInt settingNumber)
    toInt str = case String.toInt str of
      Just i -> i
      Nothing -> 0

    enumInputToIndex str = UpdateEnumSetting settingNumber (toInt str) strOptions
    optionFromEnumValue index strOpt =
      option [ value (String.fromInt index), selected (settingValue == index) ] [ text strOpt ]
    optionsHtml = List.indexedMap optionFromEnumValue strOptions
  in
    div [] [ label [ for numStr ] [ text (settingName ++ ": ") ]
           , select [ onInput enumInputToIndex ] optionsHtml
    ]
