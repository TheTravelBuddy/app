import React, { useMemo } from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Scaffold } from "../components";

const BookingFavoritesScreen = ({ navigation: { goBack } }) => {
  return (
    <Scaffold
      header={useMemo(() => ({ title: "Favorites", backAction: goBack }), [
        goBack,
      ])}
    >
      <View style={commonStyles.Section}>
        {/* {searchResults.map(
          ({ coverUri, name, rating, locality, city, price, distance }) => (
            <BookingSearchCard
              {...{ coverUri, name, rating, locality, city, price, distance }}
              style={[commonStyles.ScreenPadded, styles.SearchCard]}
            />
          )
        )} */}
      </View>
    </Scaffold>
  );
};

export default BookingFavoritesScreen;
