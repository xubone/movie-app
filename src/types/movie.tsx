export type TMovieType = "movie" | "series" | "episode";

export type TMovies = {
  Title: string;
  Year: number;
  imdbID: string;
  Poster: string;
  Type: TMovieType;
};
