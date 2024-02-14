import React from 'react'
import GPTSearchBar from './gptSearchBar'
import GPTMovieSuggestions from './gptMovieSuggestions'
import { netflix_home_page_background_url } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
    <div className='absolute'>
    <img src={netflix_home_page_background_url} alt='background' className='h-screen w-screen'/>
   </div>
    <GPTSearchBar/>
    <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch