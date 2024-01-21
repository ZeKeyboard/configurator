module KeyboardView exposing (keyboardView)

import Model exposing (Model)
import Keyboard exposing (Layout, Key)
import Css exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (css)
import Messages exposing (Msg)
import Keyboard exposing (Action)
import KeyCodes exposing (keyCodeToString)


keyboardView : Layout -> Int -> Maybe Key -> Html Msg
keyboardView layout layerIndex selectedKey =
  div []
      [ div [ ]
      (List.map (\k -> keyView k layerIndex selectedKey) layout)
      ]

keyView : Key -> Int -> Maybe Key -> Html Msg
keyView key layerIndex selectedKey =
  let
    maybeAction =
      selectedLayerAction key layerIndex
    keyText =
      case maybeAction of
        Nothing ->
          ""
        Just action ->
          case (List.head action) of
            Nothing ->
              ""
            Just keyPress ->
              keyCodeToString keyPress.key
    x = keyX key
    y = keyY key
  in
    div [ css [ width <| px <| key.width * (keySize) + (key.width - 1) * keyPadding
              , height <| px <| key.height * (keySize) + (key.height - 1) * keyPadding
              , backgroundColor <| keyBackgroundColor <| keyIsSelected key selectedKey
              , color <| keyForegroundColor <| keyIsSelected key selectedKey
              , position absolute
              , cursor pointer
              , top <| px <| y
              , left <| px <| x
              , borderStyle solid
              , borderWidth <| px 2
              , borderRadius <| px 5
              , hover [ backgroundColor <| keyHoverColor <| keyIsSelected key selectedKey ]
              ]
        , onClick <| Messages.KeyClicked <| key
        ]
      [ text keyText
      ]


keyIsSelected : Key -> Maybe Key -> Bool
keyIsSelected key selectedKey =
  case selectedKey of
    Nothing ->
      False
    Just k ->
      key.id == k.id


keyBackgroundColor : Bool -> Color
keyBackgroundColor isSelected =
  if isSelected then
    rgb 201 156 64
  else
    rgb 200 200 200

keyForegroundColor : Bool -> Color
keyForegroundColor isSelected =
  if isSelected then
    rgb 255 255 255
  else
    rgb 0 0 0

keyBorderColor : Bool -> Color
keyBorderColor isSelected =
  if isSelected then
    rgb 255 255 255
  else
    rgb 0 0 0


keyHoverColor : Bool -> Color
keyHoverColor isSelected =
  if isSelected then
    rgb 194 168 116
  else
    rgb 150 150 150


selectedLayerAction : Key -> Int -> Maybe Action
selectedLayerAction key layerIndex =
  if layerIndex == 0 then
    key.actionLayer1
  else if layerIndex == 1 then
    key.actionLayer2
  else if layerIndex == 2 then
    key.actionLayer3
  else
    Nothing


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
