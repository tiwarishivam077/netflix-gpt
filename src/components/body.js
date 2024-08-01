import React from 'react'
import Login from './login'
import Browse from './browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { lazy, Suspense } from 'react'


const MoviePlayer = lazy(() => import('./watchMovie')) 

const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element : <Login/>,
        },

        { 
            path : '/browse',
            element: <Browse/>,
        },

        { 
          path : '/watch',
          element:   <Suspense fallback={<div className='bg-black text-white font-bold text-3xl text-center'>Movie Player is Loading</div>}><MoviePlayer/></Suspense>
        }

    ]);

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}




export default Body