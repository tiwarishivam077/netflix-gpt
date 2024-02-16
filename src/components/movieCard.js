import React from 'react'
import { tmdb_img_url } from '../utils/constants'


const MovieCard = (posterPath) => {
   let imgUrl = ''
    if(!posterPath) return null

    else
    {
       imgUrl =  posterPath?.posterPath
    }
    
    
  return posterPath ? (
    <div className='m-4 pr-4 overflow-auto-x w-48 border-blue-500 hover:scale-125 transition-transform'>
    <img alt='imgcard' src={tmdb_img_url + imgUrl }/>
    </div>
  ) : null
}

export default MovieCard