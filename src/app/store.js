// importing form the toolkit
import { configureStore } from '@reduxjs/toolkit'

// importing the slice for the counter
import counterSlice from '../features/counter/counterSlice'

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
export default configureStore({
  reducer: {
    counter: counterSlice
  },
})