import React, { useState } from "react";
import axios from "axios";
type ApiResult = {
  ResultsFound: string;
  ErrorMessage: string;
};
type Movies = {
  title: string;
  year: number;
  imdbid: string;
};

type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: Movies[] } // todo: specify the data type too
  | { status: "error"; error: ApiResult };

export default function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({ status: "idle" });

  const search = async () => {
    setSearchState({ status: "loading" });
    const apikey = "fad16781";
    const queryParam = encodeURIComponent(searchText);

    const apiResult = await axios.get(`https://omdbapi.com/?apikey=${apikey}&s=${queryParam}`);
    // console.log(apiResult);
    console.log(apiResult.data);
    // console.log(apiResult.data.Search);
    if (apiResult.data.Response === "False") {
      console.log("Fout!");
      setSearchState({
        status: "error",
        error: { ResultsFound: apiResult.data.Response, ErrorMessage: apiResult.data.Error },
      });
    } else {
      console.log("succes!");
      setSearchState({
        status: "success",
        data: apiResult.data.Search.map((movie: any) => {
          return { title: movie.Title, year: movie.Year, imdbid: movie.imdbID };
        }),
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
              return (
                <p>
                  {movie.title}- {movie.year}
                </p>
              );
            })
          : searchState.status}
      </p>
    </div>
  );
}
