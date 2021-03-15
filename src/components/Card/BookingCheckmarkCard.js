import React from "react";
import { Card } from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";
import ScreenTitle from "../Typography/ScreenTitle";

const BookingCheckmarkCard = () => {
  const { width } = useScreenDimensions();
  return (
    <Card style={{ width, height: width / 3 }}>
      <MaterialCommunityIcons
        name="checkbox-marked-circle"
        size={50}
        style={styles.Icon}
      />
      <ScreenTitle style={styles.Title}>Booked!</ScreenTitle>
    </Card>
  );
};
const styles = {
  Icon: {
    alignSelf: "center",
    marginVertical: SCREEN_PADDING,
    color: "#047F27",
  },
  Title: {
    color: "#047F27",
    fontSize: 24,
    // lineHeight: 28,
    // marginVertical: SCREEN_PADDING,
    alignSelf: "center",
  },
};

export default BookingCheckmarkCard;
