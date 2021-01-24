import React from "react";
import { Card, Text } from "react-native-paper";
import RatingPill from "../../RatingPill";

import useScreenDimensions from "../../../hooks/useScreenDimensions";

const HotelDetailCard = ({ name, coverUri, rating, location, price }) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={{ width: Math.round(width / 2) }}>
      <Card.Cover source={{ uri: coverUri }} />
      <Card.Title
        title={name}
        right={() => <RatingPill rating={rating} />}
        rightStyle={styles.RatingPill}
        subtitle={location}
      />
      <Card.Content>
        <Text>{price}/night</Text>
      </Card.Content>
    </Card>
  );
};

const styles = {
  RatingPill: {
    marginRight: 16,
  },
};

export default HotelDetailCard;
