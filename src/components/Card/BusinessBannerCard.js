import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import CardSubtitle from "../Typography/CardSubtitle";
import RatingPill from "../RatingPill";

import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BusinessBannerCard = ({ title, coverUri, style, name, rating }) => {
  const { width } = useScreenDimensions();

  return (
    <Card
      style={[{ width: width - 2 * SCREEN_PADDING }, style]}
      onPress={() => {
        // eslint-disable-next-line no-alert
        alert("WIP: Business Owner Screen Navigation");
      }}
    >
      <Card.Cover
        style={{ height: Math.round(width / 2 - SCREEN_PADDING) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{title}</CardTitle>
          <RatingPill rating={rating} />
        </View>

        <CardSubtitle>{name}</CardSubtitle>
      </View>
    </Card>
  );
};

export default BusinessBannerCard;
