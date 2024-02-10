import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video absolute'>
    <h1 className='text-6xl font-bold text-white'>{title}</h1>
    <h1 className='text-3xl mt-2 w-1/2 text-white'>{overview}</h1>
    <div className='m-4 p-4'>
    <button className='bg-white  text-black mr-4 px-20 py-4 rounded-lg text-xl hover:bg-gray-400'> ▶️  Play</button>
    <button className='bg-gray-500  text-white mr-4 px-20 py-4 rounded-lg text-xl hover:bg-opacity-60'> More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle