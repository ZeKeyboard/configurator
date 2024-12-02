module ViewControl exposing (viewControl)

import Css exposing (..)
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, value, selected)
import Html.Styled.Events exposing (onInput)
import Language exposing (Language)


viewControl : Int -> Language -> Html Msg
viewControl currentLayerIndex language =
  let
    layerInputToMessage str =
      case str of
        "0" -> Messages.SetLayer 0
        "1" -> Messages.SetLayer 1
        "2" -> Messages.SetLayer 2
        _ -> Messages.SetLayer 0

    languageInputToMessage str =
      case str of
        "se" -> Messages.SetLanguage Language.Swedish
        "en" -> Messages.SetLanguage Language.English
        _ -> Messages.SetLanguage Language.Swedish
  in
    div [ ]
      [ select [ class "layerViewControl", onInput layerInputToMessage ]
        [
          option [ value "0", selected (currentLayerIndex == 0) ] [ text "Layer 1" ],
          option [ value "1", selected (currentLayerIndex == 1) ] [ text "Layer 2" ],
          option [ value "2", selected (currentLayerIndex == 2) ] [ text "Layer 3" ] ]
      , select [ class "layerViewControl", onInput languageInputToMessage ]
        [
          option [ value "se", selected (language == Language.Swedish) ] [ text "🇸🇪" ],
          option [ value "en", selected (language == Language.English) ] [ text "🇺🇸" ]
        ]
      ]
