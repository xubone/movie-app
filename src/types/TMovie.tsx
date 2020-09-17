export type TMovieType = "movie" | "series" | "episode";

export type TMovie = {
  Title: string;
  Year: number;
  imdbID: string;
  Poster: string;
  Type: TMovieType;
};
