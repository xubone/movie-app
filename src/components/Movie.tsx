import React from "react";
import { TMovies, TMovieType } from "../types/movie";

type Props = {
  movie: TMovies;
};
export default function Movie(props: Props) {
  return (
    <div key={props.movie.imdbID}>
      {props.movie.Title}- {props.movie.Year} - {props.movie.Type}
      <div>
        <img src={props.movie.Poster}></img>
      </div>
    </div>
  );
}
