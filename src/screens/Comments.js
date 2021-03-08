import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, CommentCard } from "../components";

const comments = [
  {
    id: 1,
    name: "Riddhi Dholakia",
    comment:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 2,
    name: "Riddhi Dholakia",
    comment:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 3,
    name: "Riddhi Dholakia",
    comment:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 4,
    name: "Riddhi Dholakia",
    comment:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const CommentsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Comments", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={[commonStyles.Section, commonStyles.ScreenPadded]}>
        {comments.map((comment) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </View>
    </Scaffold>
  );
};

export default CommentsScreen;
