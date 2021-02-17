import React from "react";
import { View } from "react-native";

import commonStyles from "./styles";

import { Appbar, Scaffold } from "../components";

const BookingFavoritesScreen = ({ navigation }) => {
  return (
    <Scaffold
      renderHeader={() => (
        <Appbar.Header>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content title="Favorites" />
        </Appbar.Header>
      )}
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
