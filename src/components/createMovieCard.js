export function createMovieCard(movie) {
  const title = movie.title ?? "Untitled";
  const year = movie.year ?? "";
  const poster = movie.poster ?? "./src/assets/images/film_1.jpg";
  const ratingText = Number.isFinite(movie.rating) ? `${movie.rating}/10` : "";
  const id = movie.id ?? "";

  return `
    <article class="movie-card">
      <a class="movie-card__link" href="#/movie/${id}">
        <img
          class="movie-card__img"
          src="${poster}"
          alt="${title}"
        />
        <div class="movie-card__title">${title}</div>
        <div class="movie__card-info">
          <div class="movie-card__year">${year}</div>
          <div class="movie-card__rating">${ratingText}</div>
        </div>
      </a>
    </article>
  `;
}
