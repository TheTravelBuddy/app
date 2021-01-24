import React from "react";
import { View } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";

import Paragraph from "../../Typography/Paragraph";
import useScreenDimensions from "../../../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../../../constants";

const BlogCard = ({ id, title, content, profilePic, likes }) => {
  const { width } = useScreenDimensions();
  return (
    <Card style={{ width: width - 2 * SCREEN_PADDING }}>
      <Card.Title
        title={title}
        left={({ size }) => (
          <Avatar.Image size={size} source={{ uri: profilePic }} />
        )}
      />
      <Card.Content>
        <Paragraph>{content}</Paragraph>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button icon="heart-outline" onPress={() => alert("Liked")}>
            {likes}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

export default BlogCard;
