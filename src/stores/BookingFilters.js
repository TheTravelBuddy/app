import produce from "immer";
import create from "zustand";
import moment from "moment";

import API from "../helpers/API";
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
  budget: [null, null],
};

const filterNames = [
  "date",
  "numberOfDays",
  "numberOfPeople",
  "travelMood",
  "budget",
];

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
  bookingType: bookingTypes.HOTEL,
  searchResults: [],
};

const stateNames = ["city", "searchQuery", "bookingType", "searchResults"];

const useBookingFilters = create(
  log((set, get) => ({
    ...initialState,
    filterValues: { ...initialFilterValues },
    initData: () => {
      set(
        produce((draftState) => {
          draftState.searchQuery = "Divy";
          draftState.city = { id: 1, name: "Mumbai" };
          draftState.filterValues.budget = [400, null];
          draftState.filterValues.date = new Date();
          draftState.filterValues.numberOfDays = 10;
          draftState.filterValues.numberOfPeople = 1;
        })
      );
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
