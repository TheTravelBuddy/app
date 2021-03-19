import React, { useCallback } from "react";
import { View } from "react-native";
import {
  Text,
  Card,
  IconButton,
  useTheme,
  Divider,
  TouchableRipple,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import commonStyles from "./styles";
import CardTitle from "../Typography/CardTitle";
import Paragraph from "../Typography/Paragraph";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BlogLocationCard = ({
  id,
  title,
  locationName,
  content,
  likes,
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
      style={[styles.LocationCard, { width: width * 0.6 }, style]}
      onPress={goToBlog}
    >
      <TouchableRipple
        onPress={() => {
          // eslint-disable-next-line no-alert
          alert("WIP: City Details Screen Navigation ");
        }}
      >
        <View style={[commonStyles.CardContainer, styles.LocationContainer]}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={18}
            color="#4A4A4A"
            style={styles.LocationIcon}
          />
          <CardTitle style={commonStyles.CardTitleText}>
            {locationName}
          </CardTitle>
        </View>
      </TouchableRipple>
      <Divider />
      <View style={commonStyles.CardContainer}>
        <View style={commonStyles.CardTitleContainer}>
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
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Like Blog Endpoint");
              }}
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
  LocationCard: {
    overflow: "hidden",
  },
  LocationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  LocationIcon: {
    marginRight: 6,
  },
};

export default BlogLocationCard;
