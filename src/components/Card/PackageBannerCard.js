import React, { useCallback } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const PackageBannerCard = ({ id, name, coverUri, rating, style }) => {
  const { width } = useScreenDimensions();
  const { navigate } = useNavigation();

  const goToPackage = useCallback(() => {
    navigate("PackageDetailsScreen", { packageId: id });
  }, [id, navigate]);

  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={goToPackage}
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
      </View>
    </Card>
  );
};

export default PackageBannerCard;
