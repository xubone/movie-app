import { TMovie, TMovieData } from "./TMovie";

export type TApiSearchResult =
  | {
      Response: "False";
      Error: string;
    }
  | { Response: "True"; Search: TMovie[]; TotalResults: string };

export type TApiSingleResult =
  | {
      Response: "False";
      Error: string;
    }
  | TMovieData;
