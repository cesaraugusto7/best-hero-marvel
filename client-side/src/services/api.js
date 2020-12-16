import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:3333`,
});
const apiMarvel = axios.create({
  baseURL: `http://localhost:3333`,
});
const data = { apiHero: api, apiMarvel: apiMarvel };
export default data;
