import React from "react";
import { View, Image } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import commonStyles from "./styles";
import RatingPill from "../RatingPill";
import CardTitle from "../Typography/CardTitle";
import PackageDurationSubtitle from "../Typography/PackageDurationSubtitle";
import SearchPackagePriceSummary from "../Typography/SearchPackagePriceSummary";
import useScreenDimensions from "../../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../../constants";

const PackageSearchCard = ({
  coverUri,
  name,
  rating,
  nights,
  days,
  price,
  style,
  ...props
}) => {
  const { width } = useScreenDimensions();
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <Card
      style={[
        { width: width - 2 * SCREEN_PADDING, padding: CARD_SPACING },
        style,
      ]}
      onPress={() => navigate("PackageDetailsScreen")}
      {...props}
    >
      <View style={styles.CardContent}>
        <Image
          style={{
            width: width / 4,
            height: width / 4,
            borderRadius: theme.roundness,
          }}
          source={{ uri: coverUri }}
        />
        <View style={styles.CardBody}>
          <View style={commonStyles.CardTitleContainer}>
            <CardTitle style={commonStyles.CardTitleText}>{name}</CardTitle>
            <RatingPill rating={rating} />
          </View>
          <PackageDurationSubtitle {...{ nights, days }} />
          <View style={commonStyles.CardActionsSpacer} />
          <SearchPackagePriceSummary {...{ price }} style={styles.CardPrice} />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  CardContent: {
    flex: 1,
    flexDirection: "row",
  },
  CardBody: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  CardPrice: {
    alignSelf: "flex-end",
  },
};

export default PackageSearchCard;
