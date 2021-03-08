import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, HotelBookingCard } from "../components";

const hotelData = [
  {
    id: 1,
    coverUri: "https://static.toiimg.com/photo/24476893.cms",
    name: "Taj Hotel",
    rating: 4.9,
    locality: "Colaba",
    city: "Mumbai",
    price: 5000,
    distance: 5,
    booking: {
      adults: 3,
      children: 3,
      rooms: 2,
      date: new Date(),
      numberOfDays: 4,
    },
  },
];

const MyBookingsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "My Bookings", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {hotelData.map((bookingDetails) => (
          <HotelBookingCard
            key={bookingDetails.id}
            {...bookingDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default MyBookingsScreen;
