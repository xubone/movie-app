import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const routeParams = useParams<{ imdbID: string }>();
  console.log(routeParams);

  // etc.
  return <div>Hello World</div>;
}
