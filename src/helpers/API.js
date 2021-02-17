import axios from "axios";
import { makeUseAxios } from "axios-hooks";
import { serverUrl } from "./secret-config.json";

const API = axios.create({
  baseURL: serverUrl,
});

export const useAPI = makeUseAxios({
  axios: API,
});

if (__DEV__)
  API.defaults.headers.common = {
    "Cache-Control": "no-cache",
  };

export default API;
