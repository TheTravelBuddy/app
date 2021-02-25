import React, { useCallback } from "react";
import { View } from "react-native";
import { Text, Card, IconButton, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BlogCard = ({ id, title, content, likes, style }) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  const goToBlog = useCallback(() => {
    navigate("BlogScreen", { blogId: id });
  }, [id, navigate]);
  return (
    <Card style={[{ width: width * 0.6 }, style]} onPress={goToBlog}>
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{title}</CardTitle>
        </View>
        <View style={styles.CardContent}>
          <Paragraph numberOfLines={2}>{content}</Paragraph>
          <View style={styles.CardActionsContainer}>
            <View style={styles.CardActionsSpacer} />
            <IconButton
              size={18}
              color={theme.colors.textSecondary}
              style={styles.CardActionsIcon}
              icon="heart-outline"
              onPress={() => {}}
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
      </View>
    </Card>
  );
};

export default BlogCard;
