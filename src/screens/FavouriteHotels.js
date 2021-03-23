import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, HotelSearchCard } from "../components";

const hoteldetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Taj Mahal Palace",
    rating: 4.5,
    locality: "Colaba",
    city: "Mumbai",
    distance: 5,
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
    distance: 10,
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
    distance: 5,
    price: 1050,
  },
];

const FavouriteHotelsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({ title: "My Favourite Hotels", backAction: goBack }),
        [goBack]
      )}
    >
      <View style={commonStyles.Section}>
        {hoteldetailsData.map((hotelDataDetails) => (
          <HotelSearchCard
            key={hotelDataDetails.id}
            {...hotelDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default FavouriteHotelsScreen;
