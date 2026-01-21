import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./storeSlice";
const store = configureStore({
  reducer: { 
    store: MyReducer 
},
});
export default store;
