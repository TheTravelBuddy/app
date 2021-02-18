import React from "react";
import { View } from "react-native";
import { Card, useTheme, IconButton, Text } from "react-native-paper";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BlogBannerCard = ({
  title,
  coverUri,
  style,
  content,
  likes,
  datetime,
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={() => {
        // eslint-disable-next-line no-alert
        alert("WIP: Blog Screen Navigation");
      }}
    >
      <Card.Cover
        style={{ height: Math.round(width / 2 - SCREEN_PADDING) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{title}</CardTitle>
        </View>
        <View style={styles.CardContent}>
          <Paragraph numberOfLines={2}>{content}</Paragraph>
        </View>
        <View style={styles.CardActionsContainer}>
          <IconButton
            size={18}
            color={theme.colors.textSecondary}
            style={styles.CardActionsIcon}
            icon="clock-outline"
          />
          <Text
            style={[
              { color: theme.colors.textSecondary },
              styles.CardActionsText,
            ]}
          >
            {datetime}
          </Text>
          <View style={styles.CardActionsSpacer} />
          <IconButton
            size={18}
            color={theme.colors.textSecondary}
            style={styles.CardActionsIcon}
            icon="heart-outline"
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Like Blog Endpoint");
            }}
          />
          <Text
            style={[
              { color: theme.colors.textSecondary },
              styles.CardActionsText,
            ]}
          >
            {likes}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default BlogBannerCard;
