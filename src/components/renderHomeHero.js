export function renderHomeHero(heroEl, movie) {
  if (!heroEl) {
    return;
  }
  if (!movie) {
    return;
  }

  const titleEl = heroEl.querySelector(".home-hero__title");
  const textEl = heroEl.querySelector("home-hero__text");
  const imgEl = heroEl.querySelector(".home-hero__image");
  const btnEl = heroEl.querySelector(".button--primary");

  if (titleEl) {
    titleEl.textContent = `${movie.title}${movie.year ? `(${movie.year})` : ""}`;
  }

  if (textEl) {
    textEl.textContent = movie.description || "";
  }

  if (imgEl) {
    imgEl.src = movie.backdrop || movie.poster;
    imgEl.alt = `${movie.title} poster`;
  }

  if (btnEl && movie.id) {
    btnEl.setAttribute("href", `#/movie/${movie.id}`);
  }
}
