import React from 'react'
import { tmdb_img_url } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeSelectedMovieId, setSelectedMovieId } from '../utils/moviesSlice'


const MovieCard = ({posterPath , movie_id}) => {
   
    const dispatch = useDispatch()

    if(!posterPath) return null
    
     const setMovieID =()=>{
      dispatch(removeSelectedMovieId())
      dispatch(setSelectedMovieId(movie_id))
     }
    
  return posterPath ? (
    <Link to='/watch'>
    <div className='m-4 pr-4 overflow-auto-x w-48  hover:scale-125 transition-transform' onClick={setMovieID}>
    <img alt='imgcard' src={tmdb_img_url + posterPath } className='rounded-lg'/>
    </div></Link>
  ) : null
}

export default MovieCard