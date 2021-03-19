import React, { useCallback } from "react";
import { View } from "react-native";
import { Card, useTheme, IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import moment from "moment";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BlogBannerCard = ({
  id,
  title,
  coverUri,
  content,
  likes,
  publishedOn,
  style,
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  const goToBlog = useCallback(() => {
    navigate("BlogScreen", { blogId: id });
  }, [id, navigate]);
  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={goToBlog}
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
            {moment(publishedOn).fromNow().toUpperCase()}
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
