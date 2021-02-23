import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const BlogSubtitle = ({ username, location, style, ...props }) => {
  const theme = useTheme();

  return (
    <View style={[styles.TitleContainer, style]} {...props}>
      <Text style={[styles.Title, theme.fonts.bold]}>{username}</Text>
      <Text style={[styles.Title, theme.fonts.regular]}>{`, ${location}`}</Text>
    </View>
  );
};

const styles = {
  TitleContainer: {
    flexDirection: "row",
  },
  Title: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 16,
  },
};

export default BlogSubtitle;
