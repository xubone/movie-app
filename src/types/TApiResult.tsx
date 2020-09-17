import { TMovie } from "./TMovie";

export type TApiResult =
  | {
      Response: "False";
      Error: string;
    }
  | { Response: "True"; Search: TMovie[]; TotalResults: string };
