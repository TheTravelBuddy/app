import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, AttractionSearchCard } from "../components";

const attractiondetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Kaneri Caves",
    rating: 4.5,
    locality: "Mumbai",
    city: "Maharashtra",
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "Juhu Beach",
    rating: 5,
    locality: "Mumbai",
    city: "Maharashtra",
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Gateway of India",
    rating: 4.5,
    locality: "Mumbai",
    city: "Maharashtra",
  },
];

const FavouriteAttractionsScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({ title: "My Favourite Iconic Places", backAction: goBack }),
        [goBack]
      )}
    >
      <View style={commonStyles.Section}>
        {attractiondetailsData.map((attractionDataDetails) => (
          <AttractionSearchCard
            key={attractionDataDetails.id}
            {...attractionDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default FavouriteAttractionsScreen;
