import React from "react";
import { useTheme } from "react-native-paper";

import Button from "../Button";

const BlogTopicCard = ({ title, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      mode="contained"
      theme={{ colors: { primary: theme.colors.surface } }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default BlogTopicCard;
