export function mapMovie(apiMovie = {}) {
  const id = apiMovie.id ?? apiMovie.kinopoiskId ?? apiMovie.movieId ?? null;

  const title =
    apiMovie.alternativeName ??
    apiMovie.name ??
    apiMovie.enName ??
    apiMovie.title ??
    "Untitled";

  const year = apiMovie.year ?? "";

  const ratingValue =
    apiMovie.rating?.kp ?? apiMovie.rating?.imdb ?? apiMovie.rating ?? null;

  const rating = Number.isFinite(ratingValue) ? ratingValue : null;

  const poster =
    apiMovie.poster?.previewUrl ??
    apiMovie.poster?.url ??
    "./src/assets/images/film_1.jpg"// ????????
    // "No Poster"// ????????

  const backdrop =
    apiMovie.backdrop?.url ??
    apiMovie.poster?.url ??
    "./src/assets/images/poster.jpg" // ????????
    // "No Poster"

  const description = apiMovie.shortDescription ?? apiMovie.description ?? "";

  return {
    id,
    title,
    year,
    rating,
    poster,
    backdrop,
    description,
  };
}
