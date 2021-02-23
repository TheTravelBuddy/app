import React, { useCallback } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import CardSubtitle from "../Typography/CardSubtitle";
import RatingPill from "../RatingPill";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BusinessBannerCard = ({
  id,
  name,
  coverUri,
  businessType,
  rating,
  style,
}) => {
  const { width } = useScreenDimensions();
  const { navigate } = useNavigation();

  const goToBusiness = useCallback(() => {
    navigate("BusinessDetailsScreen", { businessId: id });
  }, [id, navigate]);

  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={goToBusiness}
    >
      <Card.Cover
        style={{ height: Math.round(width / 2 - SCREEN_PADDING) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <CardSubtitle>{businessType}</CardSubtitle>
      </View>
    </Card>
  );
};

export default BusinessBannerCard;
