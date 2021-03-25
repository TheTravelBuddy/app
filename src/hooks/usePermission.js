import { useState, useEffect } from "react";
import { Platform, PermissionsAndroid } from "react-native";

const usePermission = (permission, title, message) => {
  const [permissionGranted, setPermissionGranted] = useState(
    Platform.OS !== "android"
  );

  useEffect(() => {
    Platform.OS === "android" &&
      PermissionsAndroid.request(permission, {
        title,
        message,
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      })
        .then((granted) => {
          setPermissionGranted(granted === PermissionsAndroid.RESULTS.GRANTED);
        })
        .catch((err) => {
          console.error(err);
          setPermissionGranted(false);
        });
  }, [permission, title, message]);

  return permissionGranted;
};

const useFineLocationPermission = () => {
  return usePermission(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    "Location Permission",
    "Travel Buddy wants to know your location."
  );
};

const useCoarseLocationPermission = () => {
  return usePermission(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    "Location Permission",
    "Travel Buddy wants to know your location."
  );
};
export { useFineLocationPermission, useCoarseLocationPermission };
export default usePermission;
