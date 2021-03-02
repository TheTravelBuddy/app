import React, { useMemo } from "react";
import { View } from "react-native";

import styles from "./styles";
import {
  HorizontalScroller,
  SectionHeader,
  Scaffold,
  PackageBannerCard,
  CityHalfCard,
  HotelDetailCard,
  BlogCard,
  RenderOnLoad,
} from "../components";
import { useAPI } from "../helpers/API";

const HomeScreen = ({ navigation: { navigate } }) => {
  const [apiRequest] = useAPI("/traveller/home");

  return (
    <Scaffold
      header={useMemo(
        () => ({
          title: "Travel Buddy",
          actions: [
            {
              icon: "magnify",
              onPress: () => navigate("BookingSearchScreen"),
            },
          ],
        }),
        [navigate]
      )}
    >
      <RenderOnLoad loading={apiRequest.loading}>
        {() => (
          <>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Top Packages
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topPackages.map((packageDetails) => (
                  <PackageBannerCard
                    key={packageDetails.id}
                    {...packageDetails}
                  />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Top Destinations
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topDestinations.map((cityDetails) => (
                  <CityHalfCard key={cityDetails.id} {...cityDetails} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Hotels Nearby
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topHotels.map((hotelDetails) => (
                  <HotelDetailCard key={hotelDetails.id} {...hotelDetails} />
                ))}
              </HorizontalScroller>
            </View>
            <View style={styles.Section}>
              <SectionHeader
                style={[styles.ScreenPadded, styles.SectionHeader]}
              >
                Top Blogs
              </SectionHeader>
              <HorizontalScroller>
                {apiRequest.data?.topBlogs.map((blogDetails) => (
                  <BlogCard key={blogDetails.id} {...blogDetails} />
                ))}
              </HorizontalScroller>
            </View>
          </>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default HomeScreen;
