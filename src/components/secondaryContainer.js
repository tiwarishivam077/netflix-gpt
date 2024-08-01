import React from 'react'
import Movielist from './movieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)
  
  return (
    <div className='bg-black bg-opacity-95 p-4'>
    <div className='-mt-56 z-20 pl-4 relative  lg:-mt-12'>
    <Movielist title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
    <Movielist title={'Popular'} movies={movies?.popularMovies}/>
    <Movielist title={'Top Rated'} movies={movies?.topRatedMovies}/>
    <Movielist title={'Upcoming'} movies={movies?.upComingMovies}/> 
    </div>
    </div>
  )
}

export default SecondaryContainer