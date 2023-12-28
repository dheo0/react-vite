import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "@store/common";
export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
  devTools: import.meta.env.REACT_APP_NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
