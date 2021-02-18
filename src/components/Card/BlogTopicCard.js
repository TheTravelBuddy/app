import React from "react";
import { Card, useTheme } from "react-native-paper";

import CardTitle from "../Typography/CardTitle";
import { SCREEN_PADDING } from "../../constants";

const BlogTopicCard = ({ id, name, style, ...props }) => {
  const theme = useTheme();

  return (
    <Card
      style={[styles.Container, style]}
      onPress={() => {
        // eslint-disable-next-line no-alert
        alert("WIP: Blog Topic Screen Navigation");
      }}
    >
      <CardTitle style={[styles.TitleText, theme.fonts.medium]}>
        {name}
      </CardTitle>
    </Card>
  );
};

const styles = {
  Container: {
    paddingHorizontal: SCREEN_PADDING * 2,
    paddingVertical: SCREEN_PADDING,
  },
  TitleText: {
    letterSpacing: 1.35,
    textTransform: "uppercase",
  },
};

export default BlogTopicCard;
