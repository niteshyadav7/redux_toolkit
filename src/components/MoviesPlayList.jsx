import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovies, removeMovies } from "../store";

const MoviesPlayList = () => {
  const moviePlaylist = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleAddMovie = (movie) => {
    dispatch(addMovies(movie));
  };
  const handleRemoveMovie = (movie) => {
    dispatch(removeMovies(movie));
  };
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleAddMovie(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>
        {moviePlaylist.map((movie) => {
          return (
            <li key={movie}>
              {movie}
              <button
                onClick={() => handleRemoveMovie(movie)}
                className="button is-danger"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesPlayList;
