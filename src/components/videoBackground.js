import React from 'react'
import UseFetchMoviebyId from '../customHooks/useFetchMoviebyId';
import { useSelector } from 'react-redux';

const VideoBackground = ({id}) => {
   
    UseFetchMoviebyId(id)
    const trailer = useSelector(store=>store.movies.trailerVideo)
    // console.log(trailer, 'trailer from store')

    
    const  key  = trailer?.key
  return (
   
<div className='w-screen pt-8'>
    <iframe 
    className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/"+ key + "?&autoplay=1&mute=1"}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    >
    </iframe>
    
    </div>
  )
}

export default VideoBackground