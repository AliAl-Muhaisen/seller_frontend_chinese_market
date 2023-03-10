import { configureStore } from "@reduxjs/toolkit";
// ...
// import { apiSlice } from "./slice/apiSlice";
import authSlice from "./slice/authSlice";


const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authSlice
  },
  // middleware:getDefaultMiddleware=>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
  //   devTools:true
  
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
