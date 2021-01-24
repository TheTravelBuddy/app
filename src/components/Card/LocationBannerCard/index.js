import React from "react";
import { Card } from "react-native-paper";
import RatingPill from "../../RatingPill";

import useScreenDimensions from "../../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../../constants";

const LocationBannerCard = ({ name, coverUri, rating }) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={{ width: width - 2 * SCREEN_PADDING }}>
      <Card.Cover source={{ uri: coverUri }} />
      <Card.Title
        title={name}
        right={() => <RatingPill rating={rating} />}
        rightStyle={styles.RatingPill}
      />
    </Card>
  );
};

const styles = {
  RatingPill: {
    marginRight: 16,
  },
};

export default LocationBannerCard;
