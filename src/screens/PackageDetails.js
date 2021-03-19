import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme } from "react-native-paper";

import screenStyles from "./styles";

import {
  SectionHeader,
  Scaffold,
  HorizontalScroller,
  PackageDurationSubtitle,
  Button,
  Chip,
  ScreenTitle,
  RatingPill,
  SearchPackagePriceSummary,
  Paragraph,
  ReviewCard,
  AboutAgencyModal,
  WriteReviewModal,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import useToggle from "../hooks/useToggle";
import { CARD_SPACING, CHIP_SPACING, SCREEN_PADDING } from "../constants";

const packageDetails = {
  id: 1,
  name: "Have Pleasure in Pune",
  about:
    "The Taj Mahal Palace Hotel is a heritage, five-star, luxury hotel built in the Saracenic Revival style in the Colaba area of Mumbai, Maharashtra, India, situated next to the Gateway of India. Historically it was known as the 'Taj Mahal Hotel' or simply 'The Taj'.",
  rating: 4.5,
  nights: "4 Nights",
  days: "5 Days",
  photos: [
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
  ],
  amenities: ["Hotel", "Sightseeing", "Activities", "Flights", "Transfers"],
  price: 3550,
};

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

const agency = [
  {
    id: 1,
    name: "Soorya Travel Agency",
    rating: 4.5,
    about:
      "As a leading travel agent in Pune, we have access to the best hotel rates and have tied-up with top resorts, airlines, and ground transport companies to provide our customers with the best value for their money.",
  },
];

const PackageDetailsScreen = ({ navigation: { goBack, navigate } }) => {
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
  const aboutAgencyModal = useToggle(false);
  const writeReviewModal = useToggle(false);
  return (
    <Scaffold
      renderFooter={() => (
        <View
          style={[styles.BottomBar, { backgroundColor: theme.colors.surface }]}
        >
          <SearchPackagePriceSummary
            style={screenStyles.FlexMore}
            price={packageDetails.price}
          />
          <Button
            mode="contained"
            style={screenStyles.Flex}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("WIP: Booking Flow");
            }}
          >
            BOOK
          </Button>
        </View>
      )}
    >
      <View>
        <HorizontalScroller gap={0} verticalSpacing={0} horizontalSpacing={0}>
          {packageDetails.photos.map((photoUri) => (
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
              {packageDetails.name}
            </ScreenTitle>
            <RatingPill rating={packageDetails.rating} />
          </View>
          <PackageDurationSubtitle
            style={screenStyles.ScreenPadded}
            nights={packageDetails.nights}
            days={packageDetails.days}
          />
        </View>
        <View style={screenStyles.Section}>
          <View
            style={[screenStyles.FormInputContainer, screenStyles.ScreenPadded]}
          >
            <Button
              mode="contained"
              icon="information-outline"
              style={screenStyles.FormInputLeft}
              theme={whiteButtonTheme}
              onPress={aboutAgencyModal.show}
            >
              About Agency
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
            {packageDetails.about}
          </Paragraph>
        </View>
        <View style={screenStyles.Section}>
          <SectionHeader
            style={[screenStyles.ScreenPadded, screenStyles.SectionHeader]}
          >
            Included in the package
          </SectionHeader>
          <View style={styles.AmenitiesContainer}>
            {packageDetails.amenities.map((amenity) => (
              <Chip key={amenity} style={{ margin: CHIP_SPACING }}>
                {amenity.toUpperCase()}
              </Chip>
            ))}
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
      {agency.map((agencyDetails) => (
        <AboutAgencyModal
          key={agencyDetails.id}
          {...agencyDetails}
          visible={aboutAgencyModal.visible}
          onDismiss={aboutAgencyModal.hide}
        />
      ))}
      <WriteReviewModal
        visible={writeReviewModal.visible}
        onDismiss={writeReviewModal.hide}
      />
    </Scaffold>
  );
};

const styles = {
  BottomBar: {
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    padding: Math.round(CARD_SPACING / 2),
    paddingLeft: SCREEN_PADDING,
  },
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
  AmenitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: SCREEN_PADDING - CHIP_SPACING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
};

export default PackageDetailsScreen;
