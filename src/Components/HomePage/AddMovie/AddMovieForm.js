import React, { Fragment, useRef } from 'react';

import classes from './AddMovieForm.module.css';

function AddMovieForm(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

  

    const movieData = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onSaveMovieData(movieData);
    titleRef("")
    openingTextRef("")
    releaseDateRef("")
  }

  return (
    <Fragment>
    <form onSubmit={submitHandler}>
      <div className={classes.top}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      </div>
      <button>Add Movie</button>
      <button className={classes.cancel} onClick={props.onCancel}>Cancel</button>
      
    </form>
    </Fragment>
  );
}

export default AddMovieForm;
