import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({message}) => {
 const navigate = useNavigate()

const handleClick=()=>{
  navigate('/browse')
}

  return (
    <div className='bg-black text-white w-screen h-screen text-center text-3xl'> 

    {/* <div className='text-white text-center text-4xl'>
   <p className='pt-[300px]'> {message}</p>
    </div> */}

    <div className="min-h-screen flex flex-col items-center justify-center">
    <img src="https://i.ytimg.com/vi/AzSY5aDs7FQ/hqdefault.jpg" alt="Error" className="w-64 h-64 mb-8" />
  <h1 className="text-4xl font-bold mb-4">Oops!</h1>
<p className="text-xl text-white-600 mb-8">Sorry, Movie is not available on the store. Please try after some time.</p>
 <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Go Back</button>
</div>
    </div>
  )
}

export default ErrorPage



