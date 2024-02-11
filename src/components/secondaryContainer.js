import React from 'react'
import Movielist from './movieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies)
  // console.log(movies.popularMovies)
  return (

    <div className='bg-black p-4'>
    <div className='-mt-64 z-20 pl-4 relative'>
    <Movielist title={'Now Playing'} movies={movies?.nowPlayingMovies}/>
    <Movielist title={'Popular'} movies={movies?.popularMovies}/>
    <Movielist title={'Top Rated'} movies={movies?.topRatedMovies}/>
    <Movielist title={'Upcoming'} movies={movies?.upComingMovies}/> 
    {/* <Movielist title={'Now Playing'} movies={movies.nowPlayingMovies}/>
    <Movielist title={'Now Playing'} movies={movies.nowPlayingMovies}/>
    <Movielist title={'Now Playing'} movies={movies.nowPlayingMovies}/> */}
    {/* 
     MovieList - Popular, Now Playing, Trending, Horror
      MovieCards * n
     */}
    </div>
    </div>
  )
}

export default SecondaryContainer