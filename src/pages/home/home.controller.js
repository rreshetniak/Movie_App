import { getMovies } from "../../api/movies.service.js";
import { mapMovie } from "../../utils/mapMovie.js";
import { renderHomeHero } from "../../components/renderHomeHero.js";
import { renderHomeMoviesGrid } from "../../components/renderHomeMoviesGrid.js";

function getHomeElements() {
  const heroEl = document.querySelector(".home-hero");

const popularGridEl = document.querySelector(
  'section[aria-label="Popular content"] .movies-grid'
);

const categoryGridEl = document.querySelector(
  'section[aria-label="Movies by category"] .movies-grid'
);

  return { heroEl, popularGridEl, categoryGridEl };
}

export async function initHomePage() {
  const { heroEl, popularGridEl, categoryGridEl } = getHomeElements();

  const heroData = await getMovies({
    limit: 10,
    //"premiere.russia": `${from}-${to}`,
    //"poster.url": "!null",
    notNullFields: [
      "poster.url",
      "description"
      ],
    type: "movie",
    //isSeries: false,
    "ticketsOnSale": false,
    year: 2026,
    description: "!null",
  }); // данные для постера
  const heroApiMovies = heroData?.docs ?? heroData?.items ?? [];
  console.log(heroApiMovies);
  const heroMovies = heroApiMovies.map(mapMovie);
  console.log(heroMovies);
  if (heroMovies.length > 0) {
    renderHomeHero(heroEl, heroMovies[0]);
  }

  const popularData = await getMovies({
    limit: 8,
    notNullFields: [
      "poster.url",
      "description"
      ],
    "rating.kp": "8-10",
    sortField: "rating.kp",
    sortType: "-1",
    isSeries: false,
  }); // популярные фильмы
  const popularApiMovies = popularData?.docs ?? popularData?.items ?? [];
  console.log(popularApiMovies);
  const popularMovies = popularApiMovies.map(mapMovie);
  console.log(popularMovies);
  renderHomeMoviesGrid(popularGridEl, popularMovies);

  const categoryData = await getMovies({
    limit: 8,
    notNullFields: [
      "poster.url",
      "description"
    ],
    "genres.name": "комедия",
  }); // фильмы по категориям
  const categoryApiMovies = categoryData?.docs ?? categoryData?.items ?? [];
  const categoryMovies = categoryApiMovies.map(mapMovie);
  renderHomeMoviesGrid(categoryGridEl, categoryMovies);
}
