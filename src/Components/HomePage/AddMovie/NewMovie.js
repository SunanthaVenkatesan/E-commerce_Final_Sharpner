//this component returns a forms at the end
import React, { useState } from "react";
import classes from './NewMovie.module.css'
import AddMovieForm from "./AddMovieForm";

const NewMovie = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveMovieDataHandler = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Math.random().toString(),
    };
    props.onAddMovie(movieData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <button className={classes.addMovie} onClick={startEditingHandler}>Add New Movies</button>
      )}
      {isEditing && (
        <AddMovieForm
          onSaveMovieData={saveMovieDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewMovie;
