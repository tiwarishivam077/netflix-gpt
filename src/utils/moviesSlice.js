import { createSlice } from "@reduxjs/toolkit";


 const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies :null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        suggestedMovies:null,
        searchedMovieResults:null,
    },

    reducers :{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload
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


 export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addSuggestedMovies, removeSearchedMovies } = moviesSlice.actions;
 export default moviesSlice.reducer; 