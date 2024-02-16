import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './movieList'

const GPTMovieSuggestions = () => {

  const {suggestedMovies, searchedMovieResults} = useSelector(store=>store.movies)
  
    return  suggestedMovies &&  searchedMovieResults ? (
    <div className='bg-black p-4 bg-opacity-85'>
    <div className='mt-[200px] z-20 pl-4 relative'>
       {
        suggestedMovies?.map((movies, idx) =>
        <Movielist key={idx} title={searchedMovieResults[idx]}  movies={movies}/> 
       )}

      </div>
    </div>
      
  ) :  null;
}

export default GPTMovieSuggestions