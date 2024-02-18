import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './movieList'
import Shimmer from './shimmerUI'

const GPTMovieSuggestions = () => {

  const showShimmer = useSelector(store=>store.movies.showShimmerUI)

  const {suggestedMovies, searchedMovieResults} = useSelector(store=>store.movies)
  
    return  !showShimmer ? (
    <div className=' bg-black bg-opacity-90 p-4 h-full min-h-screen '>
    <div className='z-20 pl-4 relative mt-52'>
       {
        suggestedMovies?.map((movies, idx) =>
        <Movielist key={idx} title={searchedMovieResults[idx]}  movies={movies}/> 
       )}

      </div>
    </div>
      
  ) :  <Shimmer/> 
}

export default GPTMovieSuggestions