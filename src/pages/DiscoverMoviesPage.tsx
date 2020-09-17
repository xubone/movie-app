import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

import { TMovie, TMovieType } from "../types/TMovie";
import { TSearchState, ProcessStatus } from "../types/TSearchState";
import { TApiResult } from "../types/TApiResult";

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [state, setSearchState] = useState<TSearchState>({ status: ProcessStatus.idle });

  const search = async () => {
    setSearchState({ status: ProcessStatus.loading });
    const apikey = "fad16781";
    const queryParam = encodeURIComponent(searchText);

    const apiResult = await axios.get(`https://omdbapi.com/?apikey=${apikey}&s=${queryParam}`);
    const result: TApiResult = apiResult.data;

    if (result.Response === "False") {
      setSearchState({ status: ProcessStatus.error, error: result });
    } else {
      setSearchState({
        status: ProcessStatus.success,
        data: result.Search,
      });
    }
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1>Discover some movies!</h1>
      <p>
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={search}>Search</button>
      </p>
      {state.status === ProcessStatus.loading && <p>Searching...</p>}
      {state.status === ProcessStatus.error && <p> :( ...</p>}
      {state.status === ProcessStatus.success && (
        <div>
          <h2>Search results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -10px",
            }}
          >
            {state.data.map((movie) => {
              return <Movie key={movie.imdbID} movie={movie} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
