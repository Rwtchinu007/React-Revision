import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) =>{
        if(state.value>0){
            state.value -= 1;
        }
    },
    incrementValueByUserInput:(state,action)=>{
        state.value = state.value + action.payload
    }
  },
});


//first export actions and then export reducer
export const { increment, decrement, incrementValueByUserInput } = counterSlice.actions;
export default counterSlice.reducer;
