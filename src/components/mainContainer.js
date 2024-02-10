import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'

const MainContainer = () => {
 
  const movies = useSelector(store=> store.movies.nowPlayingMovies)
  if(!movies) return
  const mainMovie = movies[1] 
  const {title, overview, id} = mainMovie
  return (
    <div>
 { <VideoTitle 
  title={title} overview={overview}/>}
 { <VideoBackground  id={id}/>}
    </div>
  )
}

export default MainContainer