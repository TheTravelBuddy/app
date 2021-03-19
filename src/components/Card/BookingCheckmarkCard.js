import React from "react";
import { View } from "react-native";
import { Card, useTheme } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING } from "../../constants";
import ScreenTitle from "../Typography/ScreenTitle";

const BookingCheckmarkCard = () => {
  const { width } = useScreenDimensions();
  const theme = useTheme();

  return (
    <Card style={[{ width, height: width / 2 }, styles.Container]}>
      <View>
        <MaterialCommunityIcons
          name="checkbox-marked-circle"
          size={width / 4}
          style={[styles.Icon, { color: theme.colors.ratingHigh }]}
        />
        <ScreenTitle style={[styles.Title, { color: theme.colors.ratingHigh }]}>
          Booked
        </ScreenTitle>
      </View>
    </Card>
  );
};
const styles = {
  Container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 0,
  },
  Icon: {
    alignSelf: "center",
    marginBottom: CARD_SPACING,
  },
  Title: {
    alignSelf: "center",
    fontSize: 28,
  },
};

export default BookingCheckmarkCard;
