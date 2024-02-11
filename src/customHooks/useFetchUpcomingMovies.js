import  { useEffect } from 'react'
import { API_OPTIONS, fetch_upcoming_movies_url } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../utils/moviesSlice'


const UseFetchUpcomingMovies = () => {

    const dispatch = useDispatch()

    const fetchUpcomingMovies = async() => {
        const data =  await fetch(fetch_upcoming_movies_url, API_OPTIONS)
        const json = await data.json()
      dispatch(
        addUpComingMovies(json.results)
      )
    }
    
      useEffect(()=>{
        fetchUpcomingMovies()
      }, [])
  
}

export default UseFetchUpcomingMovies