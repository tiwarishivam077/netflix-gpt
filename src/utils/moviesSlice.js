import { createSlice } from "@reduxjs/toolkit";


 const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        selectedMovieId:null,
        nowPlayingMovies :null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        suggestedMovies:null,
        searchedMovieResults:null,
        movieVideo:null,
    },

    reducers :{
        
        setSelectedMovieId : (state, action)=>{
          state.selectedMovieId = action.payload 
        },
        removeSelectedMovieId : (state)=>{
            state.selectedMovieId = null 
          },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload
        },
        addSelectedMovie : (state, action) =>{
            state.movieVideo = action.payload
        },
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state, action) =>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies : (state, action) =>{
            state.upComingMovies = action.payload
        },
        addSuggestedMovies : (state, action) =>{
            const {movieNames, movieResults } =action.payload
            state.suggestedMovies = movieResults 
            state.searchedMovieResults = movieNames
        },
       

        removeSearchedMovies : (state) =>{
            state.suggestedMovies = null
            state.searchedMovieResults=null
        },


    }
 });


 export const { addNowPlayingMovies,removeSelectedMovieId, addSelectedMovie, addTrailerVideo, setSelectedMovieId, addPopularMovies, addTopRatedMovies, addUpComingMovies, addSuggestedMovies, removeSearchedMovies } = moviesSlice.actions;
 export default moviesSlice.reducer; 