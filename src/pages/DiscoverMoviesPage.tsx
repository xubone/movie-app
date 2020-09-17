import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

import { TMovies, TMovieType } from "../types/movie";

type ApiResult =
  | {
      Response: "False";
      Error: string;
    }
  | { Response: "True"; Search: TMovies[]; TotalResults: string };

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: TMovies[] } // todo: specify the data type too
  | { status: "error"; error: ApiResult };

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({ status: "idle" });

  const search = async () => {
    setSearchState({ status: "loading" });
    const apikey = "fad16781";
    const queryParam = encodeURIComponent(searchText);

    const apiResult = await axios.get(`https://omdbapi.com/?apikey=${apikey}&s=${queryParam}`);

    console.log(apiResult.data);
    const result: ApiResult = apiResult.data;

    if (result.Response === "False") {
      console.log("Fout!");
      setSearchState({ status: "error", error: result });
    } else {
      console.log("succes!");
      setSearchState({
        status: "success",
        data: result.Search,
      });
    }
  };
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={search}>Search</button>
      </p>
      <p>
        {searchState.status === "success"
          ? searchState.data.map((movie) => {
              return <Movie movie={movie} />;
            })
          : searchState.status}
      </p>
    </div>
  );
}
