import { Route, Switch, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails/index";

//function Movies({ movies: { id, title, description } }) {
function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((item) => (
            <li>
              <NavLink to={`/movies/${item.id}`}>{item.id}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
