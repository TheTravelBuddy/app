import React from "react";
import { View } from "react-native";

import styles from "./styles";
import {
  Appbar,
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  BlogBannerCard,
  BlogHalfCard,
  BlogTopicCard,
 
} from "../components";

const blogSummaryData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/77652252/oie_2095710glh9nB1O.jpg?width=748&resize=4",
    title: "True Paradise on Earth",
    content:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
    likes: 43,
    dop: "6 mins ago",
  },
  {
    id: 2,
    coverUri:
      "https://images.news18.com/ibnlive/uploads/2016/07/Chitkul-Valley-Himachal-PradeshIndia-Edited-in-Lightroom-5-Imgur.jpg",
    title: "City Lights in New York",
    content:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
    likes: 43,
    dop: "5 hrs ago",
  },
  {
    id: 3,
    coverUri: "https://picsum.photos/1005",
    title: "Beauty of South",
    content:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
    likes: 43,
    dop: "1 week ago",
  },
];
const blogsData = [
  {
    id: 1,
    city: "Goa",
    profilePic: "https://picsum.photos/1001",
    title: "My Vacation to Goa",
    likes: 43,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 2,
    city: "Mumbai",
    profilePic: "https://picsum.photos/1000",
    title: "Food Experiences Every...",
    likes: 69,
    content:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 3,
    city: "Delhi",
    profilePic: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 15,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
];
const topicData = [
  {
    id: 1,
    title: "Adventure",
  },
  {
    id: 2,
    title: "Cuisine",
  },
  {
    id: 3,
    title: "Beaches",
  },
  {
    id: 3,
    title: "Historical",
  },
];
const CommunityScreen = () => {
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.Content title="Community" />
        </Appbar.Header>
      )}
    >
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Recommended For You
        </SectionHeader>
        <HorizontalScroller>
          {blogSummaryData.map(
            ({ id, title, coverUri, style, content, likes, dop }) => (
              <BlogBannerCard
                key={id}
                {...{ title, coverUri, style, content, likes, dop }}
              />
            )
          )}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Discover More
        </SectionHeader>
        <HorizontalScroller>
          {topicData.map(({ id, title }) => (
            <BlogTopicCard key={id} {...{ title }} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          From your favourite destinations
        </SectionHeader>
        <HorizontalScroller>
          {blogsData.map((blogDetails) => (
            <BlogHalfCard key={blogDetails.id} {...blogDetails} />
          ))}
        </HorizontalScroller>
      </View>
    </Scaffold>
  );
};

export default CommunityScreen;
