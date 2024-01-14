module KeyboardView exposing (keyboardView)

import Model exposing (Model)
import Keyboard exposing (Layout, Key)
import Css exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Messages exposing (Msg)
import Keyboard exposing (Action)
import KeyCodes exposing (keyCodeToString)


keyboardView : Layout -> Int -> Html Msg
keyboardView layout layerIndex =
  div []
      [ div [ ]
      (List.map (\k -> keyView k layerIndex) layout)
      ]

keyView : Key -> Int -> Html Msg
keyView key layerIndex =
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
              , backgroundColor (rgb 100 100 100)
              , position absolute
              , top <| px <| y
              , left <| px <| x
              , borderStyle solid
              , borderWidth <| px 2
              , borderRadius <| px 5
              , hover [ backgroundColor (rgb 150 150 150) ]
              ]
        ]
      [ text keyText
      ]


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
