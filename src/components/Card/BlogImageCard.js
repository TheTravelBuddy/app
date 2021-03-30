import React from "react";
import { Card } from "react-native-paper";

import useScreenDimensions from "../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../constants";

const BlogImageCard = ({ id, photo, style }) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={[{ width: width - 2 * SCREEN_PADDING }, style]}>
      <Card.Cover
        style={{ height: Math.round(width / 2 - SCREEN_PADDING) }}
        source={{ uri: photo }}
      />
    </Card>
  );
};

export default BlogImageCard;
