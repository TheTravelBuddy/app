import React from "react";
import { View } from "react-native";
import {
  Text,
  Card,
  Avatar,
  IconButton,
  useTheme,
  Divider,
} from "react-native-paper";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import commonStyles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BlogCard = ({ id, title, city, content, profilePic, likes, style }) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  return (
    <Card style={[{ width: width * 0.6 }, style]}>
      <View style={[commonStyles.CardContainer, styles.LocationContainer]}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={16}
          color="#4A4A4A"
          style={styles.LocationIcon}
        />
        <CardTitle style={commonStyles.CardTitleText}>{city}</CardTitle>
      </View>
      <Divider />
      <View style={commonStyles.CardContainer}>
        <View style={commonStyles.CardTitleContainer}>
          <Avatar.Image
            size={24}
            source={{ uri: profilePic }}
            style={commonStyles.CardTitleIcon}
          />
          <CardTitle style={commonStyles.CardTitleText}>{title}</CardTitle>
        </View>
        <View style={commonStyles.CardContent}>
          <Paragraph numberOfLines={2}>{content}</Paragraph>
          <View style={commonStyles.CardActionsContainer}>
            <View style={commonStyles.CardActionsSpacer} />
            <IconButton
              size={18}
              color={theme.colors.textSecondary}
              style={commonStyles.CardActionsIcon}
              icon="heart-outline"
              onPress={() => {}}
            />
            <Text
              style={[
                { color: theme.colors.textSecondary },
                commonStyles.CardActionsText,
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

const styles = {
  LocationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  LocationIcon: {
    marginRight: 6,
  },
};

export default BlogCard;
