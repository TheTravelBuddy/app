import React from "react";
import { Card, useTheme } from "react-native-paper";

import CardTitle from "../Typography/CardTitle";
import { SCREEN_PADDING } from "../../constants";

const BlogTopicCard = ({ title, style }) => {
  const theme = useTheme();

  return (
    <Card style={[styles.Container, style]}>
      <CardTitle style={[styles.TitleText, theme.fonts.medium]}>
        {title}
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
