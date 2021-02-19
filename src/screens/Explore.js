import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "./styles";
import {
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  BusinessCard,
  PlaceCard,
  ExploreTopicCard,
  BusinessBannerCard,
} from "../components";

const businessData = [
  { id: 1, name: "Cake Shops", coverUri: "https://picsum.photos/1003" },
  { id: 2, name: "Best Places to eat", coverUri: "https://picsum.photos/1002" },
  { id: 3, name: "Parks", coverUri: "https://picsum.photos/1001" },
  { id: 4, name: "Shopping Malls", coverUri: "https://picsum.photos/1003" },
];

const placesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
    name: "Kanheri Caves",
    rating: 4.5,
  },
  {
    id: 2,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "National Park",
    rating: 4.9,
  },
  {
    id: 3,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Juhu Beach",
    rating: 4.9,
  },
];
const topicData = [
  { id: 1, name: "Parking" },
  { id: 2, name: "Police" },
  { id: 3, name: "Petrol Pump" },
];

const topBussinessesData = [
  {
    id: 1,
    coverUri:
      "https://static.toiimg.com/photo/77652252/oie_2095710glh9nB1O.jpg?width=748&resize=4",
    title: "Bombay Gastro and Grill",

    rating: 4.5,
    name: "Restaurant",
  },
  {
    id: 2,
    coverUri:
      "https://images.news18.com/ibnlive/uploads/2016/07/Chitkul-Valley-Himachal-PradeshIndia-Edited-in-Lightroom-5-Imgur.jpg",
    title: "RCD Foodie",

    rating: 5,
    name: "Restaurant",
  },
  {
    id: 3,
    coverUri: "https://picsum.photos/1005",
    title: "Jugs Kitchen",
    rating: 4.2,
    name: "Restaurant",
  },
];

const ExploreScreen = () => {
  return (
    <Scaffold header={useMemo(() => ({ title: "Explore" }), [])}>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          See Whats Nearby
        </SectionHeader>
        <HorizontalScroller>
          {businessData.map((businessDataDetails) => (
            <BusinessCard
              key={businessDataDetails.id}
              {...businessDataDetails}
            />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Iconic Places
        </SectionHeader>
        <HorizontalScroller>
          {placesData.map((placesDataDetails) => (
            <PlaceCard key={placesDataDetails.id} {...placesDataDetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Services Near You
        </SectionHeader>
        <HorizontalScroller>
          {topicData.map((topicDetails) => (
            <ExploreTopicCard key={topicDetails.id} {...topicDetails} />
          ))}
        </HorizontalScroller>
      </View>
      <View style={styles.Section}>
        <SectionHeader style={[styles.ScreenPadded, styles.SectionHeader]}>
          Recommended For You
        </SectionHeader>
        <HorizontalScroller>
          {topBussinessesData.map((topBussinessesDetails) => (
            <BusinessBannerCard
              key={topBussinessesDetails.id}
              {...topBussinessesDetails}
            />
          ))}
        </HorizontalScroller>
      </View>
    </Scaffold>
  );
};

export default ExploreScreen;
