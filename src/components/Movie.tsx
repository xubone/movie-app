import React from "react";
import { TMovie } from "../types/TMovie";
import { Link } from "react-router-dom";
type Props = {
  movie: TMovie;
};
export default function Movie({ movie }: Props) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <Link to={`/movie/${movie.imdbID}`}>
          <strong>{movie.Title}</strong> - {movie.Year}
        </Link>
      </div>
      <div>
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{
            display: "block",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
}
