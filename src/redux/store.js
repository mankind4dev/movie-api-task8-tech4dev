import { configureStore } from "@reduxjs/toolkit";
import trendingSliceReducer from "./reducer/reducerSlice";
import mayLikeSliceReducer from "./reducer/reducerMayLikeSlice";

export const store = configureStore({
  reducer: {
    trending: trendingSliceReducer,
    mayLike: mayLikeSliceReducer
  },
});
