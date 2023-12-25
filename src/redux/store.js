import {configureStore} from "@reduxjs/toolkit"
import capsulesReducer from "./slices/capsulesSlice"

export const store = configureStore({
  reducer: {
    capsules: capsulesReducer
  },
})
