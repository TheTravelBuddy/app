import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, MyBookingHotelCard } from "../components";

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
  },
];

const MyBookingScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "My Bookings", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {hotelData.map(
          ({ id, coverUri, name, rating, locality, city, price, distance }) => (
            <MyBookingHotelCard
              key={id}
              {...{ coverUri, name, rating, locality, city, price, distance }}
              style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
            />
          )
        )}
      </View>
    </Scaffold>
  );
};

export default MyBookingScreen;
