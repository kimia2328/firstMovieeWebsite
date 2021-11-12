import { create } from "apisauce";

const baseURL = "https://murmuring-tundra-31743.herokuapp.com/movies/3";
const PARAMS = { api_key: "4ba2c80bd43f2892ecb3349fa445015f" };
const api = create({ baseURL: baseURL, params: PARAMS });

export async function getRequest(url, params = PARAMS) {
  return api.get(url, params);
}