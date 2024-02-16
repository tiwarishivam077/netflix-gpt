import React, { useEffect, useState } from 'react'
import UseFetchMoviebyId from '../customHooks/useFetchMoviebyId';
import { useSelector } from 'react-redux';
import { youtube_url } from '../utils/constants';

const VideoBackground = ({id, volume}) => {
   
    const [ endUrl, setEndUrl] = useState("?controls=1&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=")
    UseFetchMoviebyId(id)
    const trailer = useSelector(store=>store.movies.trailerVideo)
    const  key  = trailer?.key
    
    useEffect(()=>{
      if(volume){
        setEndUrl("?controls=1&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&playlist=")
      }
      else{
        setEndUrl("?controls=1&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=")
      }
      
    },[volume])
    

    

  return (
   
<div className='w-screen'>
    <iframe 
    className='w-screen aspect-video'
    src={ youtube_url + key + endUrl + key}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
    >
    </iframe>
    
    </div>
  )
}

export default VideoBackground