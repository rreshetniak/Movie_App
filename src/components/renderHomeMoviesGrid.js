import { createMovieCard } from "./createMovieCard.js";

export function renderHomeMoviesGrid(gridEl, movies) {
  if (!gridEl) {
    return;
  }

  const safeMovies = Array.isArray(movies) ? movies : [];
  gridEl.innerHTML = safeMovies.map(createMovieCard).join("");
}
