import { TMovie, TMovieData } from "./TMovie";
import { TApiResult } from "./TApiResult";

export enum ProcessStatus {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}
export type TSearchState =
  | { status: ProcessStatus.idle }
  | { status: ProcessStatus.loading }
  | { status: ProcessStatus.success; data: TMovie[] }
  | { status: ProcessStatus.error; error: TApiResult };

export type TMovieSearchState =
  | { status: ProcessStatus.idle }
  | { status: ProcessStatus.loading }
  | { status: ProcessStatus.success; data: TMovieData }
  | { status: ProcessStatus.error; error: TApiResult };
