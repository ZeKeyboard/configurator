module KeyboardView exposing (keyboardView)

import Keyboard exposing (Layout, Key)
import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css, class)
import Messages exposing (Msg)
import Keyboard exposing (selectedLayerAction)
import KeyCodes exposing (keyCodeToString)
import Keyboard exposing (Action(..))
import Keyboard exposing (KeyActions(..))
import KeyCodes exposing (layerModifierCodeToString)


keyboardView : Layout -> Int -> Maybe Key -> Bool -> Html Msg
keyboardView layout layerIndex selectedKey hovering =
  let
    maxKeyX =
      Maybe.withDefault 0 (List.maximum <| List.map keyX layout)

    maxKeyY =
      Maybe.withDefault 0 (List.maximum <| List.map keyY layout)

    viewWidth = width <| px <| maxKeyX + keySize + offsetX
    viewHeight = height <| px <| maxKeyY + keySize + offsetY
    viewCss = css [ viewWidth, viewHeight, position relative ]

    keys = div [ viewCss ] (List.map (\k -> keyView k layerIndex selectedKey hovering) layout)
  in
    div [] [ keys ]


keyView : Key -> Int -> Maybe Key -> Bool -> Html Msg
keyView key layerIndex selectedKey hovering =
  let
    keyText =
      if hovering then
        "..."
      else
        case key.actions of
          LayerModifier keyCode ->
            layerModifierCodeToString keyCode
          LayerAction layers ->
            case selectedLayerAction layers layerIndex of
              Nothing ->
                ""
              Just action ->
                case action of
                  Single keyCode ->
                    keyCodeToString keyCode
                  _ -> "[..]"

    x = keyX key
    y = keyY key

    keyBorderStyle = if hovering then dashed else solid

  in
    div [ css [ width <| px <| key.width * (keySize) + (key.width - 1) * keyPadding
              , height <| px <| key.height * (keySize) + (key.height - 1) * keyPadding
              , backgroundColor <| keyBackgroundColor (keyIsSelected key selectedKey) hovering
              , color <| keyForegroundColor (keyIsSelected key selectedKey) hovering
              , top <| px <| y
              , left <| px <| x
              , borderColor <| keyBorderColor (keyIsSelected key selectedKey) hovering
              , borderStyle keyBorderStyle
              , hover [ backgroundColor <| keyHoverColor <| keyIsSelected key selectedKey ]
              ]
        , class "keyContainer"
        , onClick <| Messages.KeyClicked <| key
        ]
      [ div [ class "keyText" ] [ text keyText ]
      ]


keyIsSelected : Key -> Maybe Key -> Bool
keyIsSelected key selectedKey =
  case selectedKey of
    Nothing ->
      False
    Just k ->
      key.id == k.id


keyBackgroundColor : Bool -> Bool -> Color
keyBackgroundColor isSelected hovering =
  if hovering then
    rgba 201 156 64 0.05
  else if isSelected then
    rgb 201 156 64
  else
    rgb 200 200 200


keyForegroundColor : Bool -> Bool -> Color
keyForegroundColor isSelected hovering =
  if isSelected || hovering then
    rgb 255 255 255
  else
    rgb 0 0 0


keyBorderColor : Bool -> Bool -> Color
keyBorderColor isSelected hovering =
  if hovering then
    rgb 200 200 200
  else if isSelected then
    rgb 255 255 255
  else
    rgb 0 0 0


keyHoverColor : Bool -> Color
keyHoverColor isSelected =
  if isSelected then
    rgb 194 168 116
  else
    rgb 150 150 150


keySize : Float
keySize =
  50


keyPadding : Float
keyPadding =
  5


offsetX : Float
offsetX =
  10


offsetY : Float
offsetY =
  10


keyX : Key -> Float
keyX key =
  key.x * (keySize + keyPadding) + offsetX


keyY : Key -> Float
keyY key =
  key.y * (keySize + keyPadding) + offsetY
