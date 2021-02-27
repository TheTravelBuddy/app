import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "./styles";
import {
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  BlogBannerCard,
  BlogLocationCard,
  BlogTopicCard,
  Button,
  RenderOnLoad,
} from "../components";
import { useAPI } from "../helpers/API";

const CommunityScreen = ({ navigation }) => {
  const [apiRequest] = useAPI("/traveller/community");

  return (
    <Scaffold header={useMemo(() => ({ title: "Community" }), [])}>
      <RenderOnLoad loading={apiRequest.loading}>
        {() => (
          <>
            <View style={styles.Section}>
              <Button
                mode="contained"
                icon="pencil-outline"
                style={styles.ScreenPadded}
                theme={{ colors: { primary: "white" } }}
                onPress={() => {
                  navigation.navigate("CreateBlogScreen");
                }}
              >
                Write a Blog
              </Button>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Recommended For You
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topBannerBlogs.map((blogDetails) => (
                  <BlogBannerCard key={blogDetails.id} {...blogDetails} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Discover More
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topBlogTopics.map((topicDetails) => (
                  <BlogTopicCard key={topicDetails.id} {...topicDetails} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Destination Blogs
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topLocationBlogs.map((blogDetails) => (
                  <BlogLocationCard key={blogDetails.id} {...blogDetails} />
                ))}
              </HorizontalScroller>
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default CommunityScreen;
