import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'


const MainContainer = () => {
  
  const [sound , setSound] = useState(false)
  
  const toggleSound=(bool)=>{
    setSound(bool)
  }
  const movies = useSelector(store=> store.movies.nowPlayingMovies)

  if(!movies) return

  const mainMovie = movies[1] 
  const {title, overview, id} = mainMovie
  
  return (
    <div>
    <VideoTitle 
     title={title}
      overview={overview} 
      id={id}
      toggleSound={(bool)=>toggleSound(bool)}  
      />
    <VideoBackground 
     id={id}
     volume={sound}
     />
    </div>
  )
}

export default MainContainer