import axios from "axios";
import { useCallback } from "react";
import { makeUseAxios } from "axios-hooks";
import { useFocusEffect } from "@react-navigation/native";
import { serverUrl } from "./secret-config.json";

const API = axios.create({
  baseURL: serverUrl,
});

export const useRawAPI = makeUseAxios({
  axios: API,
});

export const useAPI = (...config) => {
  const [request, refetch, ...rest] = useRawAPI(...config);

  /* eslint-disable react-hooks/exhaustive-deps */
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  return [request, refetch, ...rest];
};

API.defaults.headers.common = {
  "Cache-Control": "no-cache",
};

export default API;
