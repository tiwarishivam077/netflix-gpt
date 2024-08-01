import React from 'react'
import GPTSearchBar from './gptSearchBar'
import GPTMovieSuggestions from './gptMovieSuggestions'
import { useDispatch } from 'react-redux'
import { addDownloadededMovie, setIsMovieLoaded, setIsMovieLoading, setSelectedMovieId } from '../utils/moviesSlice'



const GPTSearch = () => {
  const dispatch = useDispatch()
  dispatch(setSelectedMovieId(null))
  dispatch(addDownloadededMovie(null))
  dispatch(setIsMovieLoading(false))
  dispatch(setIsMovieLoaded(false))

  // const { searchedMovieResults} = useSelector(store=>store.movies)

  return  (
    <div>
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch