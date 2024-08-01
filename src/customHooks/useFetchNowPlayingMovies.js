import  { useEffect } from 'react'
import { API_OPTIONS, fetch_now_playing_movies_url } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const UseFetchNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const fetchNowPlayingMovies =async()=>{
        const data =  await fetch(fetch_now_playing_movies_url, API_OPTIONS)
        const json = await data.json()
      dispatch(
        addNowPlayingMovies(json.results)
      )
    }
    
      useEffect(()=>{
        fetchNowPlayingMovies()

      }, [])
  
}

export default UseFetchNowPlayingMovies