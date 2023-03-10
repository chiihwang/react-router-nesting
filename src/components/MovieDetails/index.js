import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();

  console.log("useParams()", useParams());
  console.log(movies);

  const movieChoice = movies.find((movie) => movie.id === +movieId);

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
