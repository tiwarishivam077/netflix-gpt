import React from 'react'
import MovieCard from './movieCard'

const Movielist = ({title, movies}) => {

  // console.log(movies, title, 'movie card')
  return (
    <div className='px-4 mx-4 mb-4 pb-4'>
     <h1 className='text-3xl  mx-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
     <div className='flex'> 
     {
      movies?.map( movie => 
        <MovieCard 
        key={movie.id}
         posterPath={movie.poster_path} 
         />
      )
     }
     </div>
    </div>
    </div>
  )
} 

export default Movielist