module ViewControl exposing (viewControl)

import Css exposing (..)
import Html
import Messages exposing (Msg)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, class, value, selected)
import Html.Styled.Events exposing (onInput)


viewControl : Int -> Html Msg
viewControl currentLayerIndex =
  let
    layerInputToMessage str =
      case str of
        "0" -> Messages.SetLayer 0
        "1" -> Messages.SetLayer 1
        "2" -> Messages.SetLayer 2
        _ -> Messages.SetLayer 0
  in
    div [ ]
      [ select [ class "layerViewControl", onInput layerInputToMessage ]
        [
          option [ value "0", selected (currentLayerIndex == 0) ] [ text "Layer 1" ],
          option [ value "1", selected (currentLayerIndex == 1) ] [ text "Layer 2" ],
          option [ value "2", selected (currentLayerIndex == 2) ] [ text "Layer 3" ]
        ]
      ]
