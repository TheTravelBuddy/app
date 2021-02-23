import React, { useCallback } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import RatingPill from "../RatingPill";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import PriceSummary from "../Typography/PriceSummary";

const HotelDetailCard = ({
  id,
  name,
  locality,
  city,
  coverUri,
  rating,
  price,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const { navigate } = useNavigation();

  const goToHotel = useCallback(() => {
    navigate("HotelDetailsScreen", { id });
  }, [id, navigate]);

  return (
    <Card style={[{ width: width / 2 }, style]} {...props} onPress={goToHotel}>
      <Card.Cover
        style={{ height: Math.round(width * 0.3) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <LocationSubtitle {...{ locality, city }} />
        <View style={styles.CardContent}>
          <PriceSummary {...{ price }} />
        </View>
      </View>
    </Card>
  );
};

export default HotelDetailCard;
