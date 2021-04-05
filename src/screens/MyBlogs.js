import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, BlogSearchCard, RenderOnLoad } from "../components";
import { useAPI } from "../helpers/API";

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
    username: "Riddhi Dholakia",
    location: "Mumbai",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",

    likes: 4,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
  {
    id: 3,
    title: "Masti in Mumbai",
    username: "Riddhi Dholakia",
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
    username: "Riddhi Dholakia",
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
    username: "Riddhi Dholakia",
    location: "Goa",
    content:
      "Suffice to say, it wasn’t enough. We needed to see more of this great world we call home. So we planned our escape and have been traveling ever since.",
    authorProfile: "https://picsum.photos/1420",
    likes: 2,
    publishedOn: "2014-09-08T08:02:17-05:00",
  },
];

const MyBlogsScreen = ({ navigation: { goBack } }) => {
  const [apiRequest] = useAPI("/traveller/profile/blog");
  return (
    <Scaffold
      header={useMemo(() => ({ title: "My Blogs", backAction: goBack }), [
        goBack,
      ])}
    >
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <>
            <View style={commonStyles.Section}>
              {apiRequest.data?.map((blog) => (
                <BlogSearchCard
                  key={blog.id}
                  {...blog}
                  style={[
                    commonStyles.ScreenPadded,
                    commonStyles.HorizontalCard,
                  ]}
                />
              ))}
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default MyBlogsScreen;
