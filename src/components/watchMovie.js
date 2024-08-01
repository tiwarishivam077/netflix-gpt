import { useSelector } from 'react-redux'
import UseFetchSelectedMoviebyId from '../customHooks/useFetchSelectedMoviebyId'
import { iframe_end_url, sorry_message, youtube_url } from '../utils/constants'
import {  useEffect, useState } from 'react'
import ErrorPage from './errorPage'
import Loader from './loader'

const WatchMovie = () => {

  UseFetchSelectedMoviebyId()
  const { isMovieLoading, isMovieLoaded, movieVideo } = useSelector(store=>store.movies)
  const [movieKey, setMovieKey] = useState(null)
  
useEffect(()=>{

  if(movieVideo){
    setMovieKey(movieVideo?.key)
  }

  console.log(isMovieLoading, isMovieLoaded, movieVideo)

}, [isMovieLoading, isMovieLoaded, movieVideo])
  

  
  return  movieKey ? (
    <div>
    <div className='w-screen h-1/2 overflow-y-scroll'>
    <iframe 
    className='w-screen aspect-video mt-[0px] bg-opacity-50'
    src={ youtube_url + movieKey + iframe_end_url + movieKey}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
    >
    </iframe>
    
    </div>
    </div>
  )
  : isMovieLoading ? <Loader/> 
  :  <ErrorPage message={sorry_message}/> 
}

export default WatchMovie
