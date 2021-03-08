import React from "react";
import { View } from "react-native";
import { Card, IconButton, useTheme } from "react-native-paper";

import commonStyles from "./styles";
import CardTitle from "../Typography/CardTitle";
import CardSubtitle from "../Typography/CardSubtitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const ServiceSearchCard = ({
  id,
  coverUri,
  name,
  rating,
  address,
  timings,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();

  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={() => {}}
      {...props}
    >
      <View style={commonStyles.CardContainer}>
        <View style={commonStyles.CardTitleContainer}>
          <CardTitle style={commonStyles.CardTitleText}>{name}</CardTitle>
        </View>

        <CardSubtitle>{address}</CardSubtitle>
        <CardSubtitle>{timings}</CardSubtitle>
        <View style={styles.ButtonContainer}>
          <IconButton
            size={24}
            color={theme.colors.textSecondary}
            style={commonStyles.CardActionsIcon}
            icon="phone-outline"
            onPress={() => {}}
          />
          <IconButton
            size={24}
            color={theme.colors.textSecondary}
            style={commonStyles.CardActionsIcon}
            icon="map-marker-outline"
            onPress={() => {}}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  ButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
};

export default ServiceSearchCard;
