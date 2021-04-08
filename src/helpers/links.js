import { Linking } from "react-native";

export const openMapLocationName = ({ location }) =>
  Linking.openURL(
    `https://www.google.com/maps/search/?api=1&query=${location}`
  );

export const openMap = ({ latitude, longitude }) =>
  openMapLocationName({ location: `${latitude},${longitude}` });

export const openDirections = ({ latitude, longitude }) =>
  Linking.openURL(
    `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
  );

export const openPhone = ({ phoneNumber }) =>
  Linking.openURL(`tel:${phoneNumber}`);

export const openLink = ({ link }) => Linking.openURL(link);
