import produce from "immer";
import create from "zustand";
import moment from "moment";

import log from "../helpers/log";
import defaultDict from "../helpers/defaultDict";

const bookingTypes = {
  HOTEL: "Hotel",
  PACKAGE: "Package",
};

const bookingTypeIllutrations = {
  HOTEL: "https://picsum.photos/702",
  PACKAGE: "https://picsum.photos/701",
};

const travelMoods = {
  RELAX: "Relax",
  ADVENTURE: "Adventure",
  MIXED: "Mixed",
};

const initialFilterValues = {
  budget: [undefined, 1000],
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
    budget: ([lower, upper]) => lower !== undefined || upper !== undefined,
  },
  (value) => !!value
);

const displayFilter = {
  date: (date) => moment(date).format("ddd, Do MMM"),
  numberOfDays: (numberOfDays) =>
    numberOfDays > 1 ? `${numberOfDays} Days` : `1 Day`,
  booking: ({ rooms, adults, children }) => {
    const list = [];
    if (rooms) list.push(`${rooms} rooms`);
    if (adults) list.push(`${adults} adults`);
    if (children) list.push(`${children} chidren`);

    return list.join(", ");
  },
  // numberOfPeople: (numberOfPeople) =>
  //   numberOfPeople > 1 ? `${numberOfPeople} People` : `1 Person`,
  travelMood: (travelMood) => `Mood: ${travelMoods[travelMood]}`,
  budget: ([lower, upper]) =>
    lower === undefined
      ? `Less than ₹${upper}`
      : upper === undefined
      ? `More than ₹${lower}`
      : `₹${lower} to ₹${upper}`,
};

const initialState = {
  city: { id: 0, name: "Mumbai" },
  bookingType: "HOTEL",
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
    setFilters: (filters) => {
      set(
        produce((draftState) => {
          draftState.filterValues = filters;
        })
      );
      get().updateResults();
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
    setCity: (city) => {
      set(
        produce((draftState) => {
          draftState.city = city;
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
  bookingTypeIllutrations,
  displayFilter,
  shouldDisplayFilter,
  useBookingFilters,
};
