import { createSlice } from "@reduxjs/toolkit";

interface ILoadingState {
  loading: boolean;
}

const initialState: ILoadingState = {
  /** loading  */
  loading: false,
};

export const loadingStore = createSlice({
  name: "loading",
  initialState,
  reducers: {
    show: (state) => {
      state.loading = true;
    },
    hidden: (state) => {
      state.loading = false;
    },
  },
});

// redux action
export const { show, hidden } = loadingStore.actions;
// redux reducer
const commonReducer = loadingStore.reducer;

export default commonReducer;
