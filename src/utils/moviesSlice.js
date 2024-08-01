import { createSlice } from "@reduxjs/toolkit";


 const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        showShimmerUI :false,
        isMovieLoading:false,
        isMovieLoaded: false,
        selectedMovieId:null,
        movieVideo:null,
        suggestedMovies:null,
        searchedMovieResults:null,
        nowPlayingMovies :null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },

    reducers :{

        toggleShimmerUI :(state ,action)=>{
          state.showShimmerUI = action.payload
        },

        setIsMovieLoading: (state, action)=>{
           state.isMovieLoading = action.payload
        },

        setIsMovieLoaded : (state, action) =>{
            state.isMovieLoaded = action.payload
        },

        setSelectedMovieId : (state, action)=>{
          state.selectedMovieId = action.payload 
        },
      
        removeSelectedMovieId : (state)=>{
            state.selectedMovieId = null 
          },

        addDownloadededMovie : (state, action) =>{
            state.movieVideo = action.payload
        },
        
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload
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


 export const {  setIsMovieLoading, toggleShimmerUI, setIsMovieLoaded,  setSelectedMovieId, removeSelectedMovieId, addDownloadededMovie, addTrailerVideo,addNowPlayingMovies,  addPopularMovies, addTopRatedMovies, addUpComingMovies, addSuggestedMovies, removeSearchedMovies } = moviesSlice.actions;
 export default moviesSlice.reducer; 