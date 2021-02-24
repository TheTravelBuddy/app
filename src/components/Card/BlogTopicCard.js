import React, { useCallback } from "react";
import { Card, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import CardTitle from "../Typography/CardTitle";
import { SCREEN_PADDING } from "../../constants";

const BlogTopicCard = ({ id, name, style, ...props }) => {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const goToBlogTopic = useCallback(() => {
    navigate("BlogTopicScreen", { blogTopicId: id });
  }, [id, navigate]);

  return (
    <Card style={[styles.Container, style]} onPress={goToBlogTopic} {...props}>
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
