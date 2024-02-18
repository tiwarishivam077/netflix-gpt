import React from 'react'
import MovieCard from './movieCard'

const Movielist = ({title, movies}) => {
 
  if(!movies||!title) return null

  movies = movies.filter(movie => movie.poster_path!==null)
 
  return movies && title ?  (
    <div className='px-4 mx-4 mb-4 pt-4 pb-4 bg-black bg-opacity-0'>
     <h1 className='text-3xl  mx-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
     <div className='flex'> 
     {
        movies?.map(( movie, idx) => 
         <MovieCard 
        key={idx}
         posterPath={movie?.poster_path} 
         movie_id={movie?.id}
         />
         
      )
     }
     </div>
    </div>
    </div>
  ) : null
} 

export default Movielist