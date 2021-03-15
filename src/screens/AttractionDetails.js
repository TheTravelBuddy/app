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
import useToggle from "../hooks/useToggle";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { SCREEN_PADDING } from "../constants";

const attractionDetails = {
  id: 1,
  name: "Kanheri Caves",
  about:
    "The Kanheri Caves are a group of caves and rock-cut monuments cut into a massive basalt outcrop in the forests of the Sanjay Gandhi National Park, on the former island of Salsette in the western outskirts of Mumbai, India",
  rating: 4.5,
  locality: "Borivali",
  city: "Mumbai",
  address: "Kanheri Caves, Mumbai, Maharashtra 400101",
  timings: "7:30 AM - 5:00 PM, Tuesday-Sunday (Closed on Mondays)",
  photos: [
    "https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186572?k=6&m=993186572&s=612x612&w=0&h=uWLnuTbp5QmYU9AOFlf3yNhmSgFbaRZPQ7Z2gB6Ts0A=",
    "https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186458?k=6&m=993186458&s=612x612&w=0&h=2NRdnto1hbfVqZo3voqiBqwPyFtiSOtkMmJTTr11I2M=",
    "https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186572?k=6&m=993186572&s=612x612&w=0&h=uWLnuTbp5QmYU9AOFlf3yNhmSgFbaRZPQ7Z2gB6Ts0A=",
    "https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186572?k=6&m=993186572&s=612x612&w=0&h=uWLnuTbp5QmYU9AOFlf3yNhmSgFbaRZPQ7Z2gB6Ts0A=",
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

const AttractionDetailsScreen = ({ navigation: { goBack, navigate } }) => {
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
          {attractionDetails.photos.map((photoUri) => (
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
              {attractionDetails.name}
            </ScreenTitle>
            <RatingPill rating={attractionDetails.rating} />
          </View>
          <LocationSubtitle
            style={screenStyles.ScreenPadded}
            locality={attractionDetails.locality}
            city={attractionDetails.city}
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
                alert("WIP: Open Attraction Location on Map");
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
            {attractionDetails.about}
          </Paragraph>
          <View style={screenStyles.ScreenPadded}>
            <SectionSubtitle>Address</SectionSubtitle>
            <Paragraph>{attractionDetails.address}</Paragraph>
          </View>
          <View style={screenStyles.ScreenPadded}>
            <SectionSubtitle>Timings</SectionSubtitle>

            <Paragraph>{attractionDetails.timings}</Paragraph>
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

export default AttractionDetailsScreen;
