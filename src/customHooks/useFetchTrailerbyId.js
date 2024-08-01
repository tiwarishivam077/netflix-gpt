import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const UseFetchMoviebyId = async(id) => {

    const dispatch = useDispatch()
    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
    
       
       
        if(json.results){
        const filterData = json.results.filter(video => video?.type==='Trailer')
        const trailer = filterData.length ? filterData[0] : json.results[0] 
        
        dispatch(
          addTrailerVideo(trailer)
        )
        } 
    }
    
    useEffect(()=>{
        getMovieVideos()
    },[])
    
  return ;
}

export default UseFetchMoviebyId