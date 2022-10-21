import React, { useState, useCallback } from 'react';

import MoviesList from '../AddMovie/MoviesList'
import './Add.css';
import NewMovie from './NewMovie';



function Add() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-ba0c5-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedMovies=[]
      for(const key in data){
        loadedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }

      
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
       //by default sends a GET request,so we have to define a post request to add the movie
    const response=  await fetch('https://react-http-ba0c5-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie) ,
      headers:{
        'Content-Type':'application/json'
      }
  })
  const data=await response.json()
  console.log(data)
}
async function deleteHandler(id){
  console.log(id)
  if(window.confirm("Are you sure in deleting?")){
    const res=  await fetch(`https://react-http-ba0c5-default-rtdb.firebaseio.com/movies/${id}.json`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
      

    
   
  })
  const data = await res.json( );
  console.log(data);
  fetchMoviesHandler()
  

  }
}






  let content
  if (movies.length > 0) {
    content = <MoviesList movies={movies} onChange={deleteHandler}/> ;

  
  }
  if( movies.length===0){
    content=<p>No Movies found...</p>
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
      <NewMovie onAddMovie={addMovieHandler} />
     
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
     
      
      <section>
  
        {content }
   
      
     
        </section>
  </section>
    </React.Fragment>
  );
}
export default Add;

