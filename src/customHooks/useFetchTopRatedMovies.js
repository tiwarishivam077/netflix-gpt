import  { useEffect } from 'react'
import { API_OPTIONS, fetch_toprated_movies_url } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'

const UseFetchTopRatedMovies = () => {
  
    const dispatch = useDispatch()

    const fetchTopRatedMovies =async()=>{
        const data =  await fetch(fetch_toprated_movies_url, API_OPTIONS)
        const json = await data.json()
      dispatch(
        addTopRatedMovies(json.results)
      )
    }
    
      useEffect(()=>{
        fetchTopRatedMovies()

      }, [])
}

export default UseFetchTopRatedMovies