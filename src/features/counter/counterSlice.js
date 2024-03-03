// importing the createSlice 
import { createSlice } from '@reduxjs/toolkit'

// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

export const counterSlice = createSlice({
  name: 'counter', // name to identify the slice
  initialState: { // initial value for the slice 
    value: 0,
    incrementByAmount: 1
  },
  reducers: {
    increment: (state) => { // state is the current value or the old value 


      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.


      state.value += state.incrementByAmount; // incrementing the old value by one and this value will now new value 
    },
    decrement: (state) => {
      state.value -= state.incrementByAmount;
    },
    incrementByAmount: (state, action) => { // action is another state that are passed while calling and provide the addition information. here action.payload means: new value which is incremented by some value.
      state.incrementByAmount = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer