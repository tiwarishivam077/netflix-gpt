import  { useEffect } from 'react'
import { search_IMDB_movie_by_name_url, search_IMDB_movie_by_name_url_suffix } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addSuggestedMovies }from '../utils/moviesSlice'

const SearchMovieonTMDB = ({movieName}) => {

  const dispatch = useDispatch()

    const fetchMovie =async(movieName)=>{
      try{
        const data = await fetch(search_IMDB_movie_by_name_url + movieName + search_IMDB_movie_by_name_url_suffix)
        const json = await (await data).json()
        dispatch(addSuggestedMovies(json))
      }
      catch(err){
        console.log(err);
      }
    }
 useEffect(()=>{
  fetchMovie(movieName)
 },[])
  
}

export default SearchMovieonTMDB