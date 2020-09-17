import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/movie/:imdbID" component={MoviePage} />
        <Route path="/discover/:searchText?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
