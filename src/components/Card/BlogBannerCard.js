import React from "react";
import { View } from "react-native";
import { Card,useTheme,IconButton,Text} from "react-native-paper";

import styles from "./styles";

import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BlogBannerCard = ({ title, coverUri, style ,content,likes,dop}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  return (
    <Card style={[{ width: width - 2 * SCREEN_PADDING }, style]}>
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
          <View style={styles.CardActionsContainer}>
          <IconButton
              size={18}
              color={theme.colors.textSecondary}
              style={styles.CardActionsIcon}
              icon="clock-outline"
              onPress={() => {}}
          />
            <Text
              style={[
                { color: theme.colors.textSecondary },
                styles.CardActionsText,
              ]}
            >
              {dop}
            </Text> 
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

export default BlogBannerCard;
