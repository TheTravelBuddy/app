import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import RatingPill from "../RatingPill";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import CardTitle from "../Typography/CardTitle";
import CardSubtitle from "../Typography/CardSubtitle";
import PackagePriceSummary from "../Typography/PackagePriceSummary";

const PackageDetailCard = ({
  id,
  name,
  duration,
  coverUri,
  rating,
  price,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={[{ width: Math.round(width * 0.67) }, style]} {...props}>
      <Card.Cover
        style={{ height: Math.round(width * 0.3) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
          <RatingPill rating={rating} />
        </View>
        <CardSubtitle>{duration}</CardSubtitle>
        <View style={styles.CardContent}>
          <PackagePriceSummary {...{ price }} />
        </View>
      </View>
    </Card>
  );
};

export default PackageDetailCard;
