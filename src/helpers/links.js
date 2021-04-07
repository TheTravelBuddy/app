import { Linking } from "react-native";

export const openMap = ({ latitude, longitude }) =>
  Linking.openURL(`https://maps.google.com/?q=${latitude},${longitude}`);

export const openMapLocationName = ({ location }) =>
  Linking.openURL(`https://maps.google.com/?q=${location}`);

export const openPhone = ({ phoneNumber }) =>
  Linking.openURL(`tel:${phoneNumber}`);
