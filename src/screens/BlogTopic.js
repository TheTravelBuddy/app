import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, BlogSearchCard } from "../components";

const blogsData = [
  {
    id: 1,
    title: "Masti in Mumbai",
    username: "Riddhi Dholakia",
    location: "Paris",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",

    likes: 5,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
  {
    id: 2,
    title: "Masti in Mumbai",
    username: "Tanvi Inch",
    location: "Mumbai",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",

    likes: 5,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
  {
    id: 3,
    title: "Masti in Mumbai",
    username: "Guddi M",
    location: "Goa",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",
    authorProfile: "https://picsum.photos/1420",
    likes: 5,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
  {
    id: 4,
    title: "Masti in Mumbai",
    username: "Dholu",
    location: "Goa",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",
    authorProfile: "https://picsum.photos/1420",
    likes: 5,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
  {
    id: 5,
    title: "Masti in Mumbai",
    username: "Dholu",
    location: "Goa",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",
    authorProfile: "https://picsum.photos/1420",
    likes: 5,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
];

const BlogTopicScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Adventure", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {blogsData.map((blogsDataDetails) => (
          <BlogSearchCard
            key={blogsDataDetails.id}
            {...blogsDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default BlogTopicScreen;
