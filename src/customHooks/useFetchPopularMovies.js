import  { useEffect } from 'react'
import { API_OPTIONS, fetch_popular_movies_url } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'


const UseFetchPopularMovies = () => {

    const dispatch = useDispatch()

    const fetchPopularMovies =async()=>{
        const data =  await fetch(fetch_popular_movies_url, API_OPTIONS)
        const json = await data.json()
      dispatch(
        addPopularMovies(json.results)
      )
    }
    
      useEffect(()=>{
        fetchPopularMovies()

      }, [])
  
}

export default UseFetchPopularMovies