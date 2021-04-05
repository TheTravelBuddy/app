import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { FAB, useTheme, Divider, Text } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { displayPackageBooking } from "../helpers/booking";

import screenStyles from "./styles";

import {
  Scaffold,
  BookingCheckmarkCard,
  PackageDurationSubtitle,
  RatingPill,
  ScreenTitle,
  Button,
  CardSubtitle,
  BookingCardPriceSubtitle,
  PackagePriceSummary,
  AboutAgencyModal,
  RenderOnLoad,
} from "../components";
import useScreenDimensions from "../hooks/useScreenDimensions";
import { CARD_SPACING, SCREEN_PADDING } from "../constants";
import useToggle from "../hooks/useToggle";
import { useAPI } from "../helpers/API";
import { openPhone } from "../helpers/links";

const PackageBookingScreen = ({
  navigation: { goBack },
  route: { params },
}) => {
  const theme = useTheme();
  const { width } = useScreenDimensions();
  const aboutAgencyModal = useToggle(false);

  const [apiRequest] = useAPI({
    url: "/traveller/package/booking",
    method: "get",
    params: { packageBookingId: params.packageBookingId },
  });

  const whiteButtonTheme = useMemo(
    () => ({
      colors: {
        primary: theme.colors.surface,
        accent: theme.colors.surface,
      },
    }),
    [theme.colors.surface]
  );

  return (
    <Scaffold>
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <>
            <FAB
              small
              style={styles.HeaderBackFAB}
              icon="arrow-left"
              theme={whiteButtonTheme}
              onPress={goBack}
              elevation={0}
            />
            <BookingCheckmarkCard />
            <View style={styles.ScreenSection}>
              <View style={[styles.Content]}>
                <Image
                  style={{
                    width: width / 6,
                    height: width / 6,
                    borderRadius: theme.roundness,
                  }}
                  source={{ uri: apiRequest.data?.package.coverUri }}
                />
                <View style={styles.TextBody}>
                  <View style={styles.Content}>
                    <ScreenTitle style={styles.TitleBody}>
                      {apiRequest.data?.package.name}
                    </ScreenTitle>
                    <RatingPill rating={apiRequest.data?.package.rating} />
                  </View>

                  <PackageDurationSubtitle
                    nights={apiRequest.data?.package.days - 1}
                    days={apiRequest.data?.package.days}
                  />
                </View>
              </View>
              <View
                style={[screenStyles.FormInputContainer, styles.ActionButtons]}
              >
                <Button
                  compact
                  mode="contained"
                  icon="information-outline"
                  style={screenStyles.FormInputLeft}
                  theme={whiteButtonTheme}
                  onPress={aboutAgencyModal.show}
                >
                  About Agency
                </Button>
                <Button
                  compact
                  mode="contained"
                  icon="phone-outline"
                  style={screenStyles.FormInputRight}
                  theme={whiteButtonTheme}
                  onPress={() => {
                    openPhone({
                      phoneNumber: apiRequest.data?.agency.phone,
                    });
                  }}
                >
                  Call Agency
                </Button>
              </View>
            </View>

            <Divider />

            <View
              style={[
                screenStyles.Section,
                screenStyles.ScreenPadded,
                styles.Content,
              ]}
            >
              <View style={styles.Flex} />
              <View style={styles.TextContainer}>
                <MaterialCommunityIcons
                  size={18}
                  color={theme.colors.textSecondary}
                  style={[styles.TextIcon]}
                  name="calendar-month-outline"
                />
                <CardSubtitle>
                  {displayPackageBooking.date(apiRequest.data?.booking.date)}
                </CardSubtitle>
              </View>
            </View>

            <Divider />

            <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
              <View>
                <Text style={[styles.SectionHeader, theme.fonts.bold]}>
                  Payment Breakdown
                </Text>
                <View style={[styles.TextContainer, styles.Content]}>
                  <Text style={[styles.SectionSubtitle, styles.Flex]}>
                    Package Price
                  </Text>
                  <PackagePriceSummary price={apiRequest.data?.package.price} />
                </View>

                <View style={[styles.TextContainer, styles.Content]}>
                  <Text style={[styles.SectionSubtitle, styles.Flex]}>
                    Number of people
                  </Text>
                  <CardSubtitle>{`× ${displayPackageBooking.booking({
                    people: apiRequest.data?.booking.people,
                  })}`}</CardSubtitle>
                </View>
              </View>
            </View>

            <Divider />

            <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
              <View style={styles.Content}>
                <Text
                  style={[
                    styles.TitleBody,
                    styles.SectionHeader,
                    theme.fonts.bold,
                  ]}
                >
                  Total Amount
                </Text>
                <BookingCardPriceSubtitle
                  style={styles.Price}
                  price={
                    apiRequest.data?.package.price *
                    apiRequest.data?.booking.people
                  }
                />
              </View>
            </View>
            <Divider />
            <View style={[screenStyles.Section, screenStyles.ScreenPadded]}>
              <View style={styles.TextContainer}>
                <MaterialCommunityIcons
                  name="alert-box-outline"
                  size={18}
                  color={theme.colors.textSecondary}
                  style={[styles.TextIcon]}
                />
                <Text style={[{ color: theme.colors.textSecondary }]}>
                  This booking is non-cancellable
                </Text>
              </View>
            </View>
            <AboutAgencyModal
              {...apiRequest.data?.agency}
              visible={aboutAgencyModal.visible}
              onDismiss={aboutAgencyModal.hide}
            />
          </>
        )}
      </RenderOnLoad>
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
  ActionButtons: {
    marginTop: SCREEN_PADDING / 2,
  },
  ScreenSection: {
    margin: SCREEN_PADDING,
  },
  SectionRightButton: {
    alignSelf: "flex-end",
  },
  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextIcon: {
    marginRight: CARD_SPACING / 2,
    margin: 0,
    color: "#696969",
  },
  Content: {
    flexDirection: "row",
  },
  TextBody: {
    flex: 1,
    marginLeft: CARD_SPACING,
  },
  Price: {
    alignSelf: "flex-end",
  },
  TitleBody: {
    flex: 1,
    marginRight: CARD_SPACING / 2,
  },
  TitleContainer: {
    flex: 1,
    flexDirection: "row",
    // marginTop: SCREEN_PADDING,
  },
  Flex: { flexGrow: 1 },
  SectionHeader: {
    fontSize: 20,
    // lineHeight: 20,
    letterSpacing: 0.15,
    color: "#4A4A4A",
  },
  SectionSubtitle: {
    fontSize: 14,
    letterSpacing: 0.15,
    color: "#9D9BA6",
  },
};

export default PackageBookingScreen;
