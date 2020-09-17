export type TMovieType = "movie" | "series" | "episode";

export type TMovie = {
  Title: string;
  Year: number;
  imdbID: string;
  Poster: string;
  Type: TMovieType;
};

export type TMovieData = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Released: string;
  Response: string;
  RunTime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};
