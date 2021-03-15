import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  LocationSubtitle,
  Button,
  ScreenTitle,
  RatingPill,
  Paragraph,
  ReviewCard,
  AttractionCard,
  HotelDetailCard,
  PackageDetailCard,
  ExploreServiceCard,
  BlogCard,
  WriteReviewModal,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../constants";
import useToggle from "../hooks/useToggle";

const cityDetails = {
  id: 1,
  name: "Mumbai",
  about:
    "Mumbai — coined 'Maximum City' by Indian author Suketu Mehta — is a metropolis where everything, or rather everybody, is always on the move. This is a city that never sleeps, stops, or slows down.",
  rating: 4.5,
  locality: "Maharashtra",
  city: "India",
  photos: [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
  ],
  amenities: ["Wifi", "AC", "Pool", "Parking", "Spa"],
  // price: 3550,
};

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
];
const hotelDetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Taj Mahal Palace",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "JW Marriott",
    rating: 5,
    locality: "Colaba",
    city: "Mumbai",
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Adarsh Baug Hotel",
    rating: 3.5,
    locality: "Kalbadevi",
    city: "Mumbai",
    price: 1050,
  },
];
const packageDetailsData = [
  {
    id: 1,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Majistic Mumbai",
    rating: 4.5,
    duration: "5N/6D",
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "Have Pleasure in Mumbai",
    rating: 5,
    duration: "5N/6D",
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Adarsh Baug Hotel",
    rating: 3.5,
    duration: "5N/6D",
    price: 1050,
  },
];
const serviceData = [
  { id: 1, name: "Parking" },
  { id: 2, name: "Police" },
  { id: 3, name: "Petrol Pump" },
];
const blogData = [
  {
    id: 1,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 5,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 2,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 5,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
  {
    id: 3,
    authorProfile: "https://picsum.photos/1000",
    title: "Magic of the North",
    likes: 45,
    content:
      "This summer vacation we went to the one of the best tourist spots of India.",
  },
];
const CityDetailsScreen = ({ navigation: { goBack, navigate } }) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );
  const writeReviewModal = useToggle(false);
  return (
    <Scaffold>
      <View>
        <HorizontalScroller gap={0} verticalSpacing={0} horizontalSpacing={0}>
          {cityDetails.photos.map((photoUri) => (
            <Image
              key={photoUri}
              source={{
                uri: photoUri,
              }}
              style={{ height: width / 2, width }}
              height={width / 2}
            />
          ))}
        </HorizontalScroller>
        <>
          <FAB
            small
            style={styles.HeaderBackFAB}
            mode="contained"
            icon="arrow-left"
            theme={whiteButtonTheme}
            onPress={goBack}
          />
          <FAB
            small
            style={styles.HeaderFavoriteFAB}
            mode="contained"
            icon="heart-outline"
            theme={whiteButtonTheme}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Like Hotel API");
            }}
          />
        </>
        <View style={[screenStyles.Section]}>
          <View style={[screenStyles.ScreenPadded, styles.TitleContainer]}>
            <ScreenTitle style={screenStyles.Flex}>
              {cityDetails.name}
            </ScreenTitle>
            <RatingPill rating={cityDetails.rating} />
          </View>
          <LocationSubtitle
            style={screenStyles.ScreenPadded}
            locality={cityDetails.locality}
            city={cityDetails.city}
          />
        </View>
        <View style={screenStyles.Section}>
          <View
            style={[screenStyles.FormInputContainer, screenStyles.ScreenPadded]}
          >
            <Button
              mode="contained"
              icon="map-marker-outline"
              style={screenStyles.FormInputLeft}
              theme={whiteButtonTheme}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Open Hotel Location on Map");
              }}
            >
              View on map
            </Button>
          </View>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            About
          </SectionHeader>
          <Paragraph style={screenStyles.ScreenPadded}>
            {cityDetails.about}
          </Paragraph>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Places to Visit
          </SectionHeader>
          <HorizontalScroller>
            {placesData.map((placesDataDetails) => (
              <AttractionCard
                key={placesDataDetails.id}
                {...placesDataDetails}
              />
            ))}
          </HorizontalScroller>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Popular Packages
          </SectionHeader>
          <HorizontalScroller>
            {packageDetailsData.map((packageDetails) => (
              <PackageDetailCard key={packageDetails.id} {...packageDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Top Hotels
          </SectionHeader>
          <HorizontalScroller>
            {hotelDetailsData.map((hotelDetails) => (
              <HotelDetailCard key={hotelDetails.id} {...hotelDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Services
          </SectionHeader>
          <HorizontalScroller>
            {serviceData.map((serviceDetails) => (
              <ExploreServiceCard key={serviceDetails.id} {...serviceDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Top Liked Blogs
          </SectionHeader>
          <HorizontalScroller>
            {blogData.map((blogDetails) => (
              <BlogCard key={blogDetails.id} {...blogDetails} />
            ))}
          </HorizontalScroller>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Reviews
          </SectionHeader>
          <View
            style={[screenStyles.FormInputContainer, screenStyles.ScreenPadded]}
          >
            <Button
              mode="contained"
              icon="pencil-outline"
              style={screenStyles.FormInputLeft}
              theme={whiteButtonTheme}
              onPress={writeReviewModal.show}
            >
              Write Review
            </Button>
          </View>
          <View style={screenStyles.ScreenPadded}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            <Button
              compact
              style={styles.SectionRightButton}
              onPress={() => {
                navigate("ReviewsScreen");
              }}
            >
              Read More Reviews
            </Button>
          </View>
        </View>
      </View>
      <WriteReviewModal
        visible={writeReviewModal.visible}
        onDismiss={writeReviewModal.hide}
      />
    </Scaffold>
  );
};

const styles = {
  HeaderBackFAB: {
    position: "absolute",
    margin: 8,
    top: 0,
    left: 0,
    zIndex: 4,
  },
  HeaderFavoriteFAB: {
    position: "absolute",
    margin: 8,
    top: 0,
    right: 0,
    zIndex: 4,
  },
  TitleContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: SCREEN_PADDING,
  },

  SectionRightButton: {
    alignSelf: "flex-end",
  },
};

export default CityDetailsScreen;
