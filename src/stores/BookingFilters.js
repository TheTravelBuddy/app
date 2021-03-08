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

const initialFilterValues = {};

const filterNames = ["date", "numberOfDays", "booking", "travelMood", "budget"];

const shouldDisplayFilter = defaultDict(
  {
    budget: (budget) => Boolean(budget?.low || budget?.high),
    booking: (booking) =>
      Boolean(booking?.rooms || booking?.adults || booking?.children),
  },
  (value) => !!value
);

const displayFilter = {
  date: (date) => moment(date).format("ddd, Do MMM"),
  numberOfDays: (numberOfDays) =>
    numberOfDays > 1 ? `${numberOfDays} Days` : `1 Day`,
  booking: ({ rooms, adults, children }) => {
    const list = [];
    if (rooms) list.push(`${rooms} ${rooms > 1 ? "Rooms" : "Room"}`);
    if (adults) list.push(`${adults} ${adults > 1 ? "Adults" : "Adult"}`);
    if (children)
      list.push(`${children} ${children > 1 ? "Children" : "Child"}`);

    return list.join(", ");
  },
  travelMood: (travelMood) => `${travelMoods[travelMood]} Mood`,
  budget: (budget) =>
    !budget.low
      ? `Less than ₹${budget.high}`
      : !budget.high
      ? `More than ₹${budget.low}`
      : `₹${budget.low} to ₹${budget.high}`,
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
      return get().clearState;
    },
    clearState: () => {
      set(
        produce((draftState) => {
          stateNames.forEach((state) => {
            draftState[state] = initialState[state];
          });
        })
      );
      get().clearFilters();
    },
    clearFilters: () => {
      set(
        produce((draftState) => {
          filterNames.forEach((filter) => {
            draftState.filterValues[filter] = initialFilterValues[filter];
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
          draftState.searchQuery = "";
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
      const { filters, bookingType } = get();
      console.log("filters", filters);
      console.log("Updating results from server.");
      set(
        produce((draftState) => {
          draftState.searchResults =
            bookingType === "HOTEL"
              ? [
                  {
                    coverUri:
                      "https://static.toiimg.com/photo/msid-52005539,width-96,height-65.cms",
                    name: "Taj Mahal Palace",
                    rating: 4.9,
                    locality: "Colaba",
                    city: "Mumbai",
                    price: 1000,
                    distance: 5,
                  },
                ]
              : [
                  {
                    id: 1,
                    coverUri: "https://static.toiimg.com/photo/24476893.cms",
                    name: "Majistic Mumbai",
                    rating: 4.5,
                    days: 5,
                    nights: 6,
                    price: 3550,
                  },
                  {
                    id: 2,
                    coverUri:
                      "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/27/36/2736904_v5.jpeg",
                    name: "Have Pleasure in Mumbai",
                    rating: 5,
                    days: 5,
                    nights: 6,
                    price: 4000,
                  },
                ];
        })
      );
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
