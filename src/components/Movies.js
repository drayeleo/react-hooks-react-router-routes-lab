import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log("movies here");

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            <h1>Name: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <>
              Genres:
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
