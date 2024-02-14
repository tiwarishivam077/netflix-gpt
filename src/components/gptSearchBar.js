import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

   const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='bg-black mx-[400px] w-[50%] rounded-xl my-24 absolute'>
    <form className='p-2 my-3 flex justify-between'>
        <input type='text' className='w-[80%] h-16 p-4 rounded-lg mx-4  bg-gray-700 text-white  bg-opacity-70' placeholder={lang[langKey].gptSearchPlaceHolder}/>
        <button className='bg-red-600 text-white px-12 py-4 mr-4 rounded-lg text-lg'>{lang[langKey].search}</button>
    </form>
    </div>
  )
}

export default GPTSearchBar