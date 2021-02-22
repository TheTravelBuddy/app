import React, { useCallback } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const AttractionCard = ({ id, name, coverUri, rating, style }) => {
  const { width } = useScreenDimensions();
  const { navigate } = useNavigation();

  const goToAtttraction = useCallback(() => {
    navigate("AttractionDetailsScreen", { attractionId: id });
  }, [id, navigate]);
  return (
    <Card style={[{ width: width / 2 }, style]} onPress={goToAtttraction}>
      <Card.Cover
        style={{ height: Math.round(width * 0.3) }}
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

export default AttractionCard;
