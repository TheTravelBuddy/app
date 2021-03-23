import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold, PackageSearchCard } from "../components";

const packagedetailsData = [
  {
    id: 1,
    coverUri:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg",
    name: "Have Pleasure in Pune",
    rating: 4.5,
    nights: 3,
    days: 4,
    price: 3550,
  },
  {
    id: 2,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
    name: "Majistic Mumbai",
    rating: 5,
    nights: 4,
    days: 5,
    price: 4000,
  },
  {
    id: 3,
    coverUri:
      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/99/50/99501_v5.jpeg",
    name: "Dil se Delhi Dekho",
    rating: 3.5,
    nights: 5,
    days: 6,
    price: 1050,
  },
];

const FavouritePackagesScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(
        () => ({ title: "My Favourite Packages", backAction: goBack }),
        [goBack]
      )}
    >
      <View style={commonStyles.Section}>
        {packagedetailsData.map((packageDataDetails) => (
          <PackageSearchCard
            key={packageDataDetails.id}
            {...packageDataDetails}
            style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
          />
        ))}
      </View>
    </Scaffold>
  );
};

export default FavouritePackagesScreen;
