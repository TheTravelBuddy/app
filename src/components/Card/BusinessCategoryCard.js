import React, { useCallback } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import CardTitle from "../Typography/CardTitle";
import useScreenDimensions from "../../hooks/useScreenDimensions";

const BusinessCard = ({ id, name, coverUri, style }) => {
  const { width } = useScreenDimensions();
  const { navigate } = useNavigation();

  const goToBusiness = useCallback(() => {
    navigate("BusinessCategoryScreen", { businessCategoryId: id });
  }, [id, navigate]);

  return (
    <Card style={[{ width: width * 0.6 }, style]} onPress={goToBusiness}>
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
