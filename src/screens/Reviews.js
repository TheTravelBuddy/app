import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, ReviewCard } from "../components";

const reviews = [
  {
    id: 1,
    name: "Riddhi Dholakia",
    rating: 4.5,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 2,
    name: "Riddhi Dholakia",
    rating: 3.6,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 3,
    name: "Riddhi Dholakia",
    rating: 3.6,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 4,
    name: "Riddhi Dholakia",
    rating: 3.6,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const ReviewsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Reviews", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={[commonStyles.Section, commonStyles.ScreenPadded]}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </View>
    </Scaffold>
  );
};

export default ReviewsScreen;
