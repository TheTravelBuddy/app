import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import {
  Scaffold,
  HotelBookingCard,
  PackageBookingCard,
  RenderOnLoad,
} from "../components";
import { useAPI } from "../helpers/API";

const MyBookingsScreen = ({ navigation: { goBack } }) => {
  const [apiRequest] = useAPI("/traveller/profile/booking");

  return (
    <Scaffold
      header={useMemo(() => ({ title: "My Bookings", backAction: goBack }), [
        goBack,
      ])}
    >
      <RenderOnLoad loading={!apiRequest.data}>
        {() => (
          <View style={commonStyles.Section}>
            {apiRequest.data?.map((booking) =>
              booking.type === "HOTEL" ? (
                <HotelBookingCard
                  key={booking.id}
                  {...booking}
                  style={[
                    commonStyles.ScreenPadded,
                    commonStyles.HorizontalCard,
                  ]}
                />
              ) : (
                <PackageBookingCard
                  key={booking.id}
                  {...booking}
                  style={[
                    commonStyles.ScreenPadded,
                    commonStyles.HorizontalCard,
                  ]}
                />
              )
            )}
          </View>
        )}
      </RenderOnLoad>
    </Scaffold>
  );
};

export default MyBookingsScreen;
