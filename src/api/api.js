import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

export const api = axios.create({
  baseURL: BASE_URL,
});

export function clearBaseURL(url) {
  const newUrl = url.replace(BASE_URL, "");
  return newUrl;
}
