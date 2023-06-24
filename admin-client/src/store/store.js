import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice";

const store = configureStore({
  reducer: CounterReducer,
});

export default store;
