import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  SectionSubtitle,
  Scaffold,
  HorizontalScroller,
  LocationSubtitle,
  Button,
  ScreenTitle,
  RatingPill,
  Paragraph,
  ReviewCard,
  WriteReviewModal,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../constants";
import useToggle from "../hooks/useToggle";

const businessDetails = {
  id: 1,
  name: "RCD Foodie",
  about:
    "This place is synonymous with delicious food that can satiate all food cravings. It is home to some of the most appreciated cuisines which include North Indian, Fast Food, Chinese. It is one of the most sought after Home Delivery Restaurants.",
  rating: 4.5,
  locality: "Kandivali",
  city: "Mumbai",
  address: "RCD, Mumbai, Maharashtra 400101",
  timings: "7:30 AM - 5:00 PM, Tuesday-Sunday (Closed on Mondays)",
  photos: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3vOSBRlKdj3I2GJklnXj9uVNhjLTCnVHEg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3vOSBRlKdj3I2GJklnXj9uVNhjLTCnVHEg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3vOSBRlKdj3I2GJklnXj9uVNhjLTCnVHEg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3vOSBRlKdj3I2GJklnXj9uVNhjLTCnVHEg&usqp=CAU",
  ],
};

const reviews = [
  {
    id: 1,
    name: "Riddhi Dholakia",
    rating: 3.6,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
  {
    id: 2,
    name: "Tanvi Inch",
    rating: 4.5,
    review:
      "An unforgettable dish doesn’t have to be anything fancy. Editor Nathan Lump had one of his all-time favorite food experiences in Mumbai: a bowl of perfectly in-season Alphonso mango..",
  },
];

const BusinessDetailsScreen = ({ navigation: { goBack, navigate } }) => {
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
          {businessDetails.photos.map((photoUri) => (
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
              alert("WIP: Like Attraction API");
            }}
          />
        </>
        <View style={[screenStyles.Section]}>
          <View style={[screenStyles.ScreenPadded, styles.TitleContainer]}>
            <ScreenTitle style={screenStyles.Flex}>
              {businessDetails.name}
            </ScreenTitle>
            <RatingPill rating={businessDetails.rating} />
          </View>
          <LocationSubtitle
            style={screenStyles.ScreenPadded}
            locality={businessDetails.locality}
            city={businessDetails.city}
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
                alert("WIP: Open Business Location on Map");
              }}
            >
              View on map
            </Button>
            <Button
              mode="contained"
              icon="phone-outline"
              style={screenStyles.FormInputRight}
              theme={whiteButtonTheme}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert("WIP: Open Contact Details");
              }}
            >
              Contact Us
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
            {businessDetails.about}
          </Paragraph>
          <View style={screenStyles.ScreenPadded}>
            <SectionSubtitle>Address</SectionSubtitle>
            <Paragraph>{businessDetails.address}</Paragraph>
          </View>
          <View style={screenStyles.ScreenPadded}>
            <SectionSubtitle>Timings</SectionSubtitle>
            <Paragraph>{businessDetails.timings}</Paragraph>
          </View>
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

export default BusinessDetailsScreen;
