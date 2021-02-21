import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import { CARD_SPACING } from "../../constants";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";

const CommentCard = ({ id, commentText, username }) => (
  <Card
    style={{
      padding: CARD_SPACING,
      marginVertical: Math.round(CARD_SPACING / 2),
    }}
    onPress={() => {}}
  >
    <View>
      <CardTitle>{username}</CardTitle>
    </View>
    <Paragraph>{commentText}</Paragraph>
  </Card>
);

export default CommentCard;
