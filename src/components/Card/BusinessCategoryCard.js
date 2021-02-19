import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BusinessCard = ({ id, name, coverUri, style }) => {
  const { width } = useScreenDimensions();
  return (
    <Card
      style={[{ width: width * 0.6 }, style]}
      onPress={() => {
        // eslint-disable-next-line no-alert
        alert("WIP: Business Category Screen Navigation");
      }}
    >
      <Card.Cover
        style={{ height: Math.round(width * 0.3) }}
        source={{ uri: coverUri }}
      />
      <View style={styles.CardContainer}>
        <View style={styles.CardTitleContainer}>
          <CardTitle style={styles.CardTitleText}>{name}</CardTitle>
        </View>
      </View>
    </Card>
  );
};

export default BusinessCard;
