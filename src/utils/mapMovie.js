export function mapMovie (apiMovie = {}) {
  const id = apiMovie.id ?? 
    apiMovie.kinopoiskId ?? 
    apiMovie.movieId ?? 
    null;

  const title = 
    apiMovie.name ??
    apiMovie.alternativeName ??
    apiMovie.enName ??
    apiMovie.title ??
    "Untitled";

  const year = apiMovie.year ?? "";

  const ratingValue = 
    apiMovie.rating?.kp ??
    apiMovie.rating?.imdb ??
    apiMovie.rating ??
    null;

  const rating = Number.isFinite(ratingValue) ? ratingValue : null;

  const poster = 
    apiMovie.poster?.previewUrl ??
    apiMovie.poster?.url ??
    "./src/assets/images/";
  
}