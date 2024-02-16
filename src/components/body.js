import React from 'react'
import Login from './login'
import Browse from './browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import WatchMovie from './watchMovie'



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
          element: <WatchMovie/>,
        }

    ]);

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}




export default Body