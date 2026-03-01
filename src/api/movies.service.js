/* Get films from server*/

import { getData } from "./getData.js";

export async function getMovies(params = {}) {
  return getData("/v1.5/movie", params);
}