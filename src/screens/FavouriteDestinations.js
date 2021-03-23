import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, CitySearchCard } from "../components";

const destinationdetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Mumbai",
    rating: 4.5,
    locality: "Maharashtra",
    city: "India",
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "Pune",
    rating: 5,
    locality: "Maharashtra",
    city: "India",
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Goa",
    rating: 4.5,
    locality: "Maharashtra",
    city: "India",
  },
];

const FavouriteDestinationsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({ title: "My Favourite Destinations", backAction: goBack }),
        [goBack]
      )}
    >
      <View style={commonStyles.Section}>
        {destinationdetailsData.map((destinationDataDetails) => (
          <CitySearchCard
            key={destinationDataDetails.id}
            {...destinationDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default FavouriteDestinationsScreen;
