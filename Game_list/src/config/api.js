import axios from "axios";

const api_URL = "https://api.rawg.io/api/games";
const api_Key = "30d791ba69654a79a634bfe19fd3980a";
const api = axios.create({
  baseURL: `${api_URL}?key=${api_Key}`,
});

export default api;
