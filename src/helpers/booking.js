import moment from "moment";
import defaultDict from "./defaultDict";
import { travelMoods } from "../constants";

export const shouldDisplayFilter = defaultDict(
  {
    budget: (budget) => Boolean(budget?.low || budget?.high),
    booking: (booking) =>
      Boolean(booking?.rooms || booking?.adults || booking?.children),
  },
  (value) => !!value
);

export const displayFilter = {
  travelMood: (travelMood) => `${travelMoods[travelMood]} Mood`,
  budget: (budget) =>
    !budget.low
      ? `Less than ₹${budget.high}`
      : !budget.high
      ? `More than ₹${budget.low}`
      : `₹${budget.low} to ₹${budget.high}`,
};

export const displayBooking = {
  date: (date) => moment(date).format("ddd, Do MMM"),
  numberOfDays: (numberOfDays) =>
    numberOfDays > 1 ? `${numberOfDays} Days` : `1 Day`,
  hotel: ({ rooms, adults, children }) => {
    const list = [];
    if (rooms) list.push(`${rooms} ${rooms > 1 ? "Rooms" : "Room"}`);
    if (adults) list.push(`${adults} ${adults > 1 ? "Adults" : "Adult"}`);
    if (children)
      list.push(`${children} ${children > 1 ? "Children" : "Child"}`);

    return list.join(", ");
  },
};
