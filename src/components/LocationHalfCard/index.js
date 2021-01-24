import React from "react";
import { Card } from "react-native-paper";
import RatingPill from "../RatingPill";

import useScreenDimensions from "../../hooks/useScreenDimensions";

const LocationBannerCard = ({ name, coverUri, rating }) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={{ width: Math.round(width / 2) }}>
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
