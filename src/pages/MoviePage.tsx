import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TMovieSearchState, ProcessStatus } from "../types/TSearchState";
import { GetMovieById } from "../services/OmdbService";

export default function MoviePage() {
  const routeParams = useParams<{ imdbID: string }>();
  const [state, setSearchState] = useState<TMovieSearchState>({ status: ProcessStatus.idle });

  useEffect(() => {
    async function fetchData() {
      setSearchState({ status: ProcessStatus.loading });

      const movieId = routeParams.imdbID;

      const result = await GetMovieById(movieId);

      if (result.Response === "False") {
        console.log("Movie not found");
        setSearchState({ status: ProcessStatus.error, error: result.Error });
      } else {
        setSearchState({ status: ProcessStatus.success, data: result });
      }
    }
    fetchData();
  }, [routeParams.imdbID]);

  // etc.
  return (
    <div style={{ padding: "20px" }}>
      {state.status === ProcessStatus.loading && <p>Getting Movie info...</p>}
      {state.status === ProcessStatus.error && <p> Movie not found</p>}
      {state.status === ProcessStatus.success && (
        <div>
          <h1>Movie: {state.data.Title}</h1>
          <img
            src={state.data.Poster}
            alt={state.data.Title}
            style={{
              display: "block",
              maxWidth: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
}
