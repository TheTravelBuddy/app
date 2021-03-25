import { PermissionsAndroid, Platform } from "react-native";

const askPermission = async (permission, config) => {
  return (
    Platform.OS !== "android" ||
    (await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[permission],
      config
    )) === PermissionsAndroid.RESULTS.GRANTED
  );
};

export const askLocationPermission = async () =>
  askPermission("ACCESS_FINE_LOCATION", {
    title: "Location Permission",
    message: "Travel Buddy wants to know your location.",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK",
  });

export default askPermission;
