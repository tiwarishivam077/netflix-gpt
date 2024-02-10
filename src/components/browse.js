import UseFetchNowPlayingMovies from '../customHooks/useFetchNowPlayingMovies'
import Header from './header'
import { useSelector } from 'react-redux'
import MainContainer from './mainContainer'
import SubContainer from './subContainer'

const Browse = () => {
   UseFetchNowPlayingMovies()
  const movies = useSelector(store=>store.movies.nowPlayingMovies)
  
if(!movies) return
 
  
  return (
    <div>
    <Header/>
    <MainContainer/>
    {/* <SubContainer/> */}
   </div>
  )
}

export default Browse