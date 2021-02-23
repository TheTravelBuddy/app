import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import { CARD_SPACING } from "../../constants";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";

const ReviewCard = ({ id, rating, review, name }) => (
  <Card
    style={{
      padding: CARD_SPACING,
      marginVertical: Math.round(CARD_SPACING / 2),
    }}
    onPress={() => {
      // eslint-disable-next-line no-alert
      alert("WIP: ReviewModal Open");
    }}
  >
    <View style={styles.Container}>
      <RatingPill rating={rating} />
      <CardTitle style={styles.UserNameText}>{name}</CardTitle>
    </View>
    <Paragraph numberOfLines={2}>{review}</Paragraph>
  </Card>
);

const styles = {
  Container: {
    flexDirection: "row",
    alignItems: "center",
  },
  UserNameText: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
};

export default ReviewCard;
