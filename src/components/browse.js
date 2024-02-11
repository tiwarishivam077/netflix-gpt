import UseFetchNowPlayingMovies from '../customHooks/useFetchNowPlayingMovies'
import Header from './header'
import { useSelector } from 'react-redux'
import MainContainer from './mainContainer'
import SecondaryContainer from './secondaryContainer'
import UseFetchPopularMovies from '../customHooks/useFetchPopularMovies'
import UseFetchTopRatedMovies from '../customHooks/useFetchTopRatedMovies'
import UseFetchUpcomingMovies from '../customHooks/useFetchUpcomingMovies'

const Browse = () => {
   UseFetchNowPlayingMovies()
   UseFetchPopularMovies()
   UseFetchTopRatedMovies()
   UseFetchUpcomingMovies()
  const movies = useSelector(store=>store.movies.nowPlayingMovies)
  
if(!movies) return
 
  
  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer classname='absolute z-2000'/>
   </div>
  )
}

export default Browse