import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { ActivityIndicator, Searchbar, useTheme } from "react-native-paper";

import commonStyles from "./styles";

import {
  BookingFiltersModal,
  BookingLocationModal,
  BookingTypeModal,
  SectionHeader,
  Scaffold,
  BookingSearchCard,
  Chip,
  HorizontalScroller,
} from "../components";
import {
  bookingTypes,
  displayFilter,
  shouldDisplayFilter,
  useBookingFilters,
} from "../stores/BookingFilters";
import useToggle from "../hooks/useToggle";
import { CARD_SPACING, SCREEN_PADDING } from "../constants";

const BookingSearchScreen = () => {
  const theme = useTheme();

  const searchInput = useRef(null);

  const selectedCity = useBookingFilters((state) => state.city);
  const selectedBookingType = useBookingFilters((state) => state.bookingType);
  const filterValues = useBookingFilters((state) => state.filterValues);
  const searchQuery = useBookingFilters((state) => state.searchQuery);
  const setSearch = useBookingFilters((state) => state.setSearch);
  const initData = useBookingFilters((state) => state.initData);
  const clearFilter = useBookingFilters((state) => state.clearFilter);
  const searchResults = useBookingFilters((state) => state.searchResults);

  const locationModal = useToggle(false);
  const bookingTypeModal = useToggle(false);
  const filtersModal = useToggle(false);

  useEffect(initData, [initData]);
  useEffect(() => {
    searchInput.current?.focus();
  }, []);

  return (
    <Scaffold
      renderHeader={() => (
        <View
          style={[
            {
              backgroundColor: theme.colors.background,
            },
            styles.HeaderContainer,
          ]}
        >
          <Searchbar
            ref={searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearch}
            style={styles.SearchHeader}
          />
          <BookingLocationModal
            visible={locationModal.visible}
            onDismiss={locationModal.hide}
          />
          <BookingTypeModal
            visible={bookingTypeModal.visible}
            onDismiss={bookingTypeModal.hide}
          />

          <BookingFiltersModal
            visible={filtersModal.visible}
            onDismiss={filtersModal.hide}
          />
          <HorizontalScroller
            horizontalSpacing={SCREEN_PADDING}
            gap={SCREEN_PADDING / 4}
          >
            <Chip icon="map-marker-outline" onPress={locationModal.show}>
              {selectedCity ? (
                selectedCity.name
              ) : (
                <ActivityIndicator size={12} />
              )}
            </Chip>
            <Chip icon="home-outline" onPress={bookingTypeModal.show}>
              {bookingTypes[selectedBookingType]}
            </Chip>
            <Chip icon="filter-outline" onPress={filtersModal.show}>
              Filter
            </Chip>
            {Object.entries(filterValues).map(
              ([filterName, filterValue]) =>
                shouldDisplayFilter[filterName](filterValue) && (
                  <Chip
                    key={filterName}
                    onClose={() => {
                      clearFilter(filterName);
                    }}
                  >
                    {displayFilter[filterName](filterValue)}
                  </Chip>
                )
            )}
          </HorizontalScroller>
        </View>
      )}
    >
      <View style={commonStyles.Section}>
        <SectionHeader
          style={[commonStyles.ScreenPadded, styles.SectionHeader]}
        >
          Search Results
        </SectionHeader>
        {searchResults.map(
          ({ coverUri, name, rating, area, city, price, distance }) => (
            <BookingSearchCard
              {...{ coverUri, name, rating, area, city, price, distance }}
              style={[commonStyles.ScreenPadded, commonStyles.HorizontalCard]}
            />
          )
        )}
      </View>
    </Scaffold>
  );
};

const styles = {
  HeaderContainer: {
    paddingVertical: SCREEN_PADDING,
  },
  SearchHeader: {
    marginHorizontal: SCREEN_PADDING,
    marginBottom: SCREEN_PADDING / 4,
  },
};

export default BookingSearchScreen;
