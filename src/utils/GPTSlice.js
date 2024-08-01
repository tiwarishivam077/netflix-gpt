import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'GPT',
    initialState:{
     showGPTComponent:false
    },
    reducers:{
        toggleShowGPTComponent : (state) => {
          state.showGPTComponent=!state.showGPTComponent
        }
    }
})

export const { toggleShowGPTComponent } = GPTSlice.actions

export default GPTSlice.reducer