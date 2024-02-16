import { useSelector } from 'react-redux'
import UseFetchSelectedMoviebyId from '../customHooks/useFetchSelectedMoviebyId'
import { youtube_url } from '../utils/constants'

const WatchMovie = () => {
  UseFetchSelectedMoviebyId()
  const selectedMovie = useSelector(store=>store.movies.movieVideo)
  const  endUrl = "?controls=1&showinfo=0&rel=0&autoplay=1&loop=1&mute=0&playlist="
  const  key  =  selectedMovie?.key
  
  return (

    <div>
    <div className='w-screen h-1/2 overflow-y-scroll'>
    <iframe 
    className='w-screen aspect-video mt-[0px] bg-opacity-50'
    src={ youtube_url + key + endUrl + key}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
    >
    </iframe>
    
    </div>
    </div>
  )
}

export default WatchMovie