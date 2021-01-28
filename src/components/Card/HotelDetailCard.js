import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import RatingPill from "../RatingPill";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import PriceSummary from "../Typography/PriceSummary";

const LocationBannerCard = ({
  name,
  area,
  city,
  coverUri,
  rating,
  price,
  style,
}) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={[{ width: width / 2 }, style]}>
      <Card.Cover
        style={{ height: Math.round(width * 0.3) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <LocationSubtitle {...{ area, city }} />
        <View style={styles.CardContent}>
          <PriceSummary {...{ price }} />
        </View>
      </View>
    </Card>
  );
};

export default LocationBannerCard;