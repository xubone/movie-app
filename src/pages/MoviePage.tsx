import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TMovieSearchState, ProcessStatus } from "../types/TSearchState";
import { TApiResult } from "../types/TApiResult";
import axios from "axios";

export default function MoviePage() {
  const routeParams = useParams<{ imdbID: string }>();
  const [state, setSearchState] = useState<TMovieSearchState>({ status: ProcessStatus.idle });

  useEffect(() => {
    async function fetchData() {
      setSearchState({ status: ProcessStatus.loading });
      const apikey = "fad16781";
      const queryParam = routeParams.imdbID;

      const apiResult = await axios.get(`https://omdbapi.com/?apikey=${apikey}&i=${queryParam}`);
      const result: TApiResult = apiResult.data;
      console.log("data", result);
      console.log("abc", result.Response);
      if (result.Response === "False") {
        console.log("Movie not found");
        setSearchState({ status: ProcessStatus.error, error: result });
      } else {
        console.log("Movie found!");
        setSearchState({ status: ProcessStatus.success, data: apiResult.data });
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
