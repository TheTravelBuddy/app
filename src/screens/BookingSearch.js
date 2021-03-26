import React, { useRef } from "react";
import { View } from "react-native";
import { Searchbar, useTheme } from "react-native-paper";

import commonStyles from "./styles";

import {
  BookingFiltersModal,
  BookingLocationModal,
  BookingTypeModal,
  SectionHeader,
  Scaffold,
  HotelSearchCard,
  PackageSearchCard,
  Chip,
  HorizontalScroller,
  RenderOnLoad,
} from "../components";
import { displayFilter, shouldDisplayFilter } from "../helpers/booking";
import useToggle from "../hooks/useToggle";
import { SCREEN_PADDING, bookingTypes } from "../constants";
import usePicker from "../hooks/usePicker";
import useObjectState from "../hooks/useObjectState";
import useTextInput from "../hooks/useTextInput";
import { useAPI } from "../helpers/API";

const BookingSearchScreen = ({ navigation }) => {
  const theme = useTheme();

  const [citiesRequest] = useAPI("/traveller/city");

  const searchInput = useRef(null);

  const searchQuery = useTextInput();
  const city = usePicker();
  const bookingType = usePicker("HOTEL");
  const filters = useObjectState();

  const [searchRequest] = useAPI({
    url: `/traveller/${bookingType.value.toLowerCase()}/search`,
    params: {
      cityId: city.value.id,
      ...(filters.value.budget?.low && {
        budgetMin: filters.value.budget?.low,
      }),
      ...(filters.value.budget?.high && {
        budgetMax: filters.value.budget?.high,
      }),
      query: searchQuery.value,
    },
  });

  const locationModal = useToggle(false);
  const bookingTypeModal = useToggle(false);
  const filtersModal = useToggle(false);

  // useEffect(() => {
  //   searchInput.current?.focus();
  // }, []);

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
            {...searchQuery.props}
            style={styles.SearchHeader}
          />
          <HorizontalScroller
            horizontalSpacing={SCREEN_PADDING}
            gap={SCREEN_PADDING / 4}
          >
            <Chip icon="map-marker-outline" onPress={locationModal.show}>
              {city.value ? city.value.name : "Select City"}
            </Chip>
            <Chip icon="home-outline" onPress={bookingTypeModal.show}>
              {bookingTypes[bookingType.value]}
            </Chip>
            <Chip icon="filter-outline" onPress={filtersModal.show}>
              Filter
            </Chip>
            {Object.entries(filters.value).map(
              ([filterName, filterValue]) =>
                shouldDisplayFilter[filterName](filterValue) && (
                  <Chip
                    key={filterName}
                    onClose={() => {
                      filters.setProperty(filterName);
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
      <RenderOnLoad loading={searchRequest.loading && !searchRequest.data}>
        {() => (
          <>
            <View style={commonStyles.Section}>
              <SectionHeader
                style={[commonStyles.ScreenPadded, styles.SectionHeader]}
              >
                Search Results
              </SectionHeader>
              {!searchRequest.loading &&
                (bookingType.value === "HOTEL"
                  ? searchRequest.data?.map((data) => (
                      <HotelSearchCard
                        key={data.id}
                        {...data}
                        style={[
                          commonStyles.ScreenPadded,
                          commonStyles.HorizontalCard,
                        ]}
                      />
                    ))
                  : searchRequest.data?.map((data) => (
                      <PackageSearchCard
                        key={data.id}
                        {...data}
                        style={[
                          commonStyles.ScreenPadded,
                          commonStyles.HorizontalCard,
                        ]}
                      />
                    )))}
            </View>
          </>
        )}
      </RenderOnLoad>
      <BookingLocationModal
        visible={locationModal.visible}
        onDismiss={locationModal.hide}
        cities={citiesRequest.data}
        city={city}
      />
      <BookingTypeModal
        visible={bookingTypeModal.visible}
        onDismiss={bookingTypeModal.hide}
        bookingType={bookingType}
      />
      <BookingFiltersModal
        visible={filtersModal.visible}
        onDismiss={filtersModal.hide}
        filters={filters}
      />
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
    elevation: 2,
  },
};

export default BookingSearchScreen;
