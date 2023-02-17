import axios from "axios";

export const characterInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});
