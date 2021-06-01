import React from "react";
import MoviesPage from "./pages/MoviesPage";
import CharactersPage from "./pages/CharactersPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MoviesPage}></Route>
      <Route exact path="/characters" component={CharactersPage}></Route>
      <Route exact path="/movie/:episodeId" component={MovieDetailPage}></Route>
      <Route path="*" component={NotFoundPage}></Route>
    </Switch>
  );
};

export default App;
