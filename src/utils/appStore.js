import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from '../utils/moviesSlice'
import gptReducer from './GPTSlice'
import configReducer from './configSlice'
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies: movieReducer,
        gptComponent:gptReducer,
        config:configReducer,
    },
})

export default appStore