import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { addSuggestedMovies } from '../utils/moviesSlice'
import { API_OPTIONS, search_IMDB_movie_by_name_url, search_IMDB_movie_by_name_url_suffix } from '../utils/constants'

const GPTSearchBar = () => {
   const langKey = useSelector(store=>store.config.lang)
   const dispatch=useDispatch()
   const searchText =useRef()



    const fetchMoviefromTMDB =async(movieName)=>{
      try{
        const data = await fetch(search_IMDB_movie_by_name_url + movieName + search_IMDB_movie_by_name_url_suffix, API_OPTIONS)
        const json =  await data.json()
        return json.results;
      }
      catch(err){
        console.log(err);
      }
    }

   const handleGPTSearchClick=async()=>{

      // Make an API call to GPT AI and get Movie Results
      const gptQueryPrompt = 'Act as a Movie Recommendation Sysytem and suggest some movies for the query' + searchText.current.value + "only give me names of 10 movies comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya " ;
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQueryPrompt }],
        model: 'gpt-3.5-turbo',
      });
      
      if(!gptResults.choices){
        // Error handling
      } 
      else{
        const movieList = gptResults?.choices?.[0]?.message?.content.split(',')
        
         const promiseArray = movieList.map(movie=>fetchMoviefromTMDB(movie))  // returns a promise array

         const tmdbResults = await Promise.all(promiseArray)  // when all the above promises will be resolved then only we will  get tmdbresults data

         dispatch(addSuggestedMovies({movieNames : movieList, movieResults: tmdbResults}))
      }
   }

  return (
    <div className='bg-black mx-[400px] w-[50%] rounded-xl my-24 absolute'>
    <form 
    className='p-2 my-3 flex justify-between' 
    onSubmit={(e) => e.preventDefault()}
    >
        <input 
        type='text' 
        ref={searchText}
        className='w-[80%] h-16 p-4 rounded-lg mx-4  bg-gray-700 text-white  bg-opacity-70'
         placeholder={lang[langKey].gptSearchPlaceHolder}
         />
        <button 
        className='bg-red-600 text-white px-12 py-4 mr-4 rounded-lg text-lg'
        onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
    </form>
    </div>
  )
}

export default GPTSearchBar