import React, { useCallback } from "react";
import { View, Image } from "react-native";
import { Card, IconButton, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import CardSubtitle from "../Typography/CardSubtitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";

const BusinessSearchCard = ({
  id,
  coverUri,
  name,
  rating,
  locality,
  city,
  timings,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  const goToBusiness = useCallback(() => {
    navigate("BusinessDetailsScreen", { businessId: id });
  }, [id, navigate]);

  return (
    <Card
      style={[
        { width: width - 2 * SCREEN_PADDING, padding: CARD_SPACING },
        style,
      ]}
      onPress={goToBusiness}
      {...props}
    >
      <View style={styles.CardContent}>
        <Image
          style={{
            width: width / 4,
            height: width / 4,
            borderRadius: theme.roundness,
          }}
          source={{ uri: coverUri }}
        />
        <View style={styles.CardBody}>
          <View style={commonStyles.CardTitleContainer}>
            <CardTitle style={commonStyles.CardTitleText}>{name}</CardTitle>
            <RatingPill rating={rating} />
          </View>
          <LocationSubtitle {...{ locality, city }} />
          <CardSubtitle>{timings}</CardSubtitle>
          <View style={styles.Spacer} />
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
      </View>
    </Card>
  );
};

const styles = {
  CardContent: {
    flex: 1,
    flexDirection: "row",
  },
  CardBody: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  CardPrice: {
    alignSelf: "flex-end",
  },
  Spacer: {
    flex: 1,
  },
  ButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
};

export default BusinessSearchCard;
