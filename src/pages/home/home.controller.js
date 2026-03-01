import { getMovies } from "../../api/movies.service.js";
import { mapMovie } from "../../utils/mapMovie.js";
import { renderHomeHero } from "../../components/renderHomeHero.js";
import { renderHomeMoviesGrid } from "../../components/renderHomeMoviesGrid.js";

function getHomeElements () {
  const heroEl = document.querySelector(".home-hero");
  const popularGridEl = document.querySelector('section[aria-label="Popular content"] .movies-grid');
  const categoryGridEl = document.querySelector('section[aria-label="Movies by category"] .movies-grid');

  return { heroEl, popularGridEl, categoryGridEl };
}

export async function initHomePage() {
  const { heroEl, popularGridEl, categoryGridEl } = getHomeElements();
  const data = await getMovies({limit: 12});
  const apiMovies = data?.docs ?? data?.items ?? [];
  const movies = apiMovies.map(mapMovie);
}

if (movies.length > 0) {
  renderHomeHero(heroEl, movies[0]);
}

renderHomeMoviesGrid(popularGridEl, movies.slice(0, 8))
renderHomeMoviesGrid(categoryGridEl, movies.slice(0, 8))


