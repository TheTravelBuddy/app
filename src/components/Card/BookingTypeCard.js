import React, { useState } from "react";
import { View } from "react-native";
import { Card, TouchableRipple, useTheme } from "react-native-paper";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import { CARD_SPACING } from "../../constants";

const BookingTypeCard = ({ renderIllustration, title, onPress, style }) => {
  const [cardWidth, setCardWidth] = useState(0);
  const theme = useTheme();

  return (
    <View
      style={[
        { flex: 1, borderRadius: theme.roundness, overflow: "hidden" },
        style,
      ]}
      onLayout={(event) => setCardWidth(event.nativeEvent.layout.width)}
    >
      <TouchableRipple {...{ onPress }}>
        <View style={{ paddingHorizontal: CARD_SPACING }}>
          {renderIllustration({
            width: cardWidth - CARD_SPACING * 2,
            height: cardWidth - CARD_SPACING * 2,
          })}
          <View style={styles.CardContainer}>
            <View style={styles.CardTitleContainer}>
              <CardTitle
                style={[styles.CardTitleText, { textAlign: "center" }]}
              >
                {title}
              </CardTitle>
            </View>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default BookingTypeCard;
