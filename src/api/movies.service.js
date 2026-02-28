/* Get films from server*/

import { getData } from "./getData";

export async function getMovies(params = {}) {
  return getData("/v1.5/movie", params);
}