import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import LocationSubtitle from "../Typography/LocationSubtitle";
import DistanceSubtitle from "../Typography/DistanceSubtitle ";
import SearchPriceSummary from "../Typography/SearchPriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BookingSearchCard = ({
  coverUri,
  style,
  name,
  rating,
  area,
  city,
  distance,

  price,
}) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={[{ width: width - 2 * SCREEN_PADDING, padding: 12 }, style]}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Card.Cover
          style={{
            width: width / 4,
            height: Math.round(width / 2 - SCREEN_PADDING),
          }}
          source={{ uri: coverUri }}
        />
        <View style={[{ flex: 1 }, styles.CardContainer]}>
          <View style={styles.CardTitleContainer}>
            <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
            <RatingPill rating={rating} />
          </View>
          <LocationSubtitle {...{ area, city }} />
          <DistanceSubtitle {...{ distance }} />
          <View
            style={[
              { position: "absolute", bottom: 0, right: 0 },
              styles.CardContent,
            ]}
          >
            <SearchPriceSummary {...{ price }} />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default BookingSearchCard;
