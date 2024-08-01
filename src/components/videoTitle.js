import React, { useState } from 'react'
import soundOnImg from '../utils/soundOn.png'
import soundOffImg from '../utils/sound0ff.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedMovieId } from '../utils/moviesSlice'

const VideoTitle = ({title, overview, toggleSound, id}) => {
  const dispatch = useDispatch()
   const [isSoundOn, setSound] = useState(true)

  const toggleFullSound=()=>{
    setSound(!isSoundOn)
    toggleSound(isSoundOn)
  }
  
   const setMovieID =()=>{
    dispatch(setSelectedMovieId(id))
   }
 
  return (
    <div className='pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video absolute'>
    <h1 className='text-6xl font-bold text-white'>{title}</h1>
    <h1 className='text-3xl mt-2 w-1/2 text-white'>{overview}</h1>
    <div className='flex'>
    <div className='m-4 p-4 mr-0'>
    <Link to='/watch'><button className='bg-white  text-black mr-4 px-20 py-4 rounded-lg text-xl hover:bg-gray-400' onClick={setMovieID} > ▶️  Play</button></Link>
    <button className='bg-gray-500  text-white mr-4 px-20 py-4 rounded-lg text-xl hover:bg-opacity-60'>More Info</button>
    </div>
    <img src= {isSoundOn ? soundOffImg : soundOnImg} alt='sound' 
    className='bg-white w-12 h-12 rounded-full mt-10 bg-opacity-50 hover:bg-opacity-100 shadow-2xl'
    onClick={toggleFullSound}
    />
    </div>
    </div>
  )
}

export default VideoTitle