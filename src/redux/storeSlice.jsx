import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('store/fetchData',async ()=>{
   const response = await fetch('https://dummyjson.com/posts');
   const  data = await response.json();
   return data.posts 
})
const StoreSlice = createSlice({
    name : "posts",
    initialState:{
        loading : false,
        posts : [],
        allPosts : [],

    },
    reducers :{
        
    },
    extraReducers :(build)=>{
        build
        .addCase(fetchData.pending,(state,action)=>{
            state.loading = true; 
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.allPosts = action.payload;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading = true;
        })
        
    }
});
export default  StoreSlice.reducer;
export  const {} = StoreSlice.actions;
