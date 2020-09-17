import React, { useState } from "react";

import Movie from "../components/Movie";

import { TSearchState, ProcessStatus } from "../types/TSearchState";
import { SearchMovieResults } from "../services/OmdbService";

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [state, setSearchState] = useState<TSearchState>({ status: ProcessStatus.idle });

  const search = async () => {
    setSearchState({ status: ProcessStatus.loading });

    const result = await SearchMovieResults(searchText);

    if (result.Response === "False") {
      setSearchState({ status: ProcessStatus.error, error: result.Response });
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
