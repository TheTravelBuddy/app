import { useState, useEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import {
  useCoarseLocationPermission,
  useFineLocationPermission,
} from "./usePermission";

const useLocation = (config) => {
  const fineLocationPermission = useFineLocationPermission();
  const coarseLocationPermission = useCoarseLocationPermission();
  const [location, setLocation] = useState();

  useEffect(() => {
    if (fineLocationPermission && coarseLocationPermission)
      Geolocation.getCurrentPosition(setLocation, console.warn, config);
  }, [config, fineLocationPermission, coarseLocationPermission]);

  return location;
};

const useWatchLocation = (config) => {
  const fineLocationPermission = useFineLocationPermission();
  const coarseLocationPermission = useCoarseLocationPermission();
  const [location, setLocation] = useState();

  useEffect(() => {
    if (fineLocationPermission && coarseLocationPermission) {
      const watchId = Geolocation.watchPosition(
        setLocation,
        console.warn,
        config
      );

      return () => Geolocation.clearWatch(watchId);
    }
  }, [config, fineLocationPermission, coarseLocationPermission]);

  return location;
};

export default useLocation;
export { useWatchLocation };
