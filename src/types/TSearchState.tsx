import { TMovie } from "./TMovie";
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
  | { status: ProcessStatus.success; data: TMovie[] } // todo: specify the data type too
  | { status: ProcessStatus.error; error: TApiResult };
