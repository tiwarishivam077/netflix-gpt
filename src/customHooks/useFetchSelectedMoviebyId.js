
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addSelectedMovie } from '../utils/moviesSlice'
import { useEffect } from 'react'

const UseFetchSelectedMoviebyId = () => {

    const dispatch = useDispatch()
    const movieId = useSelector(store=>store.movies.selectedMovieId)

    useEffect(()=>{
        if(movieId)
        getMovieVideos()
    },[movieId])
    
   
    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
      
        if(json.results){
        const movieclips = json.results.filter(video => video?.type==='Clip')
        const movieFeaturette = json.results.filter(video => video?.type==='Featurette')
        const behindTheScenes = json.results.filter(video => video?.type==='Behind the Scenes')
       
        const movieClip = movieclips.length ? movieclips[0] 
        : movieFeaturette.length ? movieFeaturette[0] 
        : behindTheScenes.length ? behindTheScenes[0]
        : json.results[0] 
        
        dispatch(
            addSelectedMovie(movieClip)
        )
        } 
    }
    
   
  return ;
}

export default UseFetchSelectedMoviebyId