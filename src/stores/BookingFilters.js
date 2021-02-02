import produce from "immer";
import create from "zustand";
import moment from "moment";

import log from "../helpers/log";
import defaultDict from "../helpers/defaultDict";

const bookingTypes = {
  HOTEL: "Hotel",
  PACKAGE: "Package",
};

const travelMoods = {
  RELAX: "Relax",
  ADVENTURE: "Adventure",
  MIXED: "Mixed",
};

const initialFilterValues = {
  budget: [null, 1000],
  // date: new Date(),
  // numberOfDays: 2,
  // booking: {
  //   rooms: 1,
  //   adults: 1,
  //   children: 0,
  // },
};

const filterNames = ["date", "numberOfDays", "booking", "travelMood", "budget"];

const shouldDisplayFilter = defaultDict(
  {
    budget: ([lower, upper]) => lower !== null || upper !== null,
  },
  (value) => !!value
);

const displayFilter = {
  date: (date) => moment(date).format("ddd, Do MMM"),
  numberOfDays: (numberOfDays) =>
    numberOfDays > 1 ? `${numberOfDays} Days` : `1 Day`,
  numberOfPeople: (numberOfPeople) =>
    numberOfPeople > 1 ? `${numberOfPeople} People` : `1 Person`,
  travelMood: (travelMood) => `Mood: ${travelMoods[travelMood]}`,
  budget: ([lower, upper]) =>
    lower === null
      ? `Less than ₹${upper}`
      : upper === null
      ? `More than ₹${lower}`
      : `₹${lower} to ₹${upper}`,
};

const initialState = {
  city: { id: 0, name: "Mumbai" },
  bookingType: bookingTypes.HOTEL,
  searchResults: [],
};

const stateNames = ["city", "searchQuery", "bookingType", "searchResults"];

const useBookingFilters = create(
  log((set, get) => ({
    ...initialState,
    filterValues: { ...initialFilterValues },
    initData: () => {
      return get().clearFilters();
    },
    clearFilters: () => {
      set(
        produce((draftState) => {
          filterNames.forEach((filter) => {
            draftState.filterValues[filter] = initialFilterValues[filter];
          });
          stateNames.forEach((state) => {
            draftState[state] = initialState[state];
          });
        })
      );
    },
    clearFilter: (filter) => {
      set(
        produce((draftState) => {
          draftState.filterValues[filter] = initialFilterValues[filter];
        })
      );
      get().updateResults();
    },
    setFilter: (filter, value) => {
      set(
        produce((draftState) => {
          draftState.filterValues[filter] = value;
        })
      );
      get().updateResults();
    },
    setSearch: (searchQuery) => {
      set(
        produce((draftState) => {
          draftState.searchQuery = searchQuery;
        })
      );
      get().updateResults();
    },
    clearSearch: () => {
      set(
        produce((draftState) => {
          draftState.searchQuery = undefined;
        })
      );
      get().updateResults();
    },
    setBookingType: (bookingType) => {
      set(
        produce((draftState) => {
          draftState.bookingType = bookingType;
        })
      );
      get().updateResults();
    },
    updateResults: () => {
      const { filters } = get();
      console.log("filters", filters);
      console.log("Updating results from server.");
    },
  }))
);

export {
  travelMoods,
  bookingTypes,
  displayFilter,
  shouldDisplayFilter,
  useBookingFilters,
};
