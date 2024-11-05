import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  trending: [
    {
      title: "Active Users",
      value: "27/80",
    },
    {
      title: "Questions Answered ",
      value: "27",
      half: "/80"
    },
    {
      title: "Av. Session Length ",
      value: "2m 34s",
    },
    {
      title: "Starting Knowledge",
      value: "64%",
    },
    {
      title: "Current Knowledge",
      value: "86%",
    },
    {
      title: "Knowledge Gain ",
      value: "+34%",
    },
  ],
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
});

export const {} = trendingSlice.actions;

export default trendingSlice.reducer;
