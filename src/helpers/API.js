import axios from "axios";
import { serverUrl } from "./secret-config.json";

const API = axios.create({
  baseURL: serverUrl,
});

export default API;
