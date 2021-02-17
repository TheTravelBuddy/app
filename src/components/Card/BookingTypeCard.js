import React, { useState } from "react";
import { View } from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";

import commonStyles from "./styles";
import CardTitle from "../Typography/CardTitle";
import { CARD_SPACING } from "../../constants";

const BookingTypeCard = ({ renderIllustration, title, onPress, style }) => {
  const [cardWidth, setCardWidth] = useState(0);
  const theme = useTheme();

  return (
    <View
      style={[styles.CardContainer, { borderRadius: theme.roundness }, style]}
      onLayout={(event) => setCardWidth(event.nativeEvent.layout.width)}
    >
      <TouchableRipple {...{ onPress }}>
        <View style={{ paddingHorizontal: CARD_SPACING }}>
          {renderIllustration({
            width: cardWidth - CARD_SPACING * 2,
            height: cardWidth - CARD_SPACING * 2,
          })}
          <View style={commonStyles.CardContainer}>
            <View style={commonStyles.CardTitleContainer}>
              <CardTitle style={[commonStyles.CardTitleText, styles.CardTitle]}>
                {title}
              </CardTitle>
            </View>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = {
  CardTitle: {
    textAlign: "center",
  },
  CardContainer: {
    flex: 1,
    overflow: "hidden",
  },
};

export default BookingTypeCard;
