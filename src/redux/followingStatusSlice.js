import { createSlice } from "@reduxjs/toolkit";

const followingStatusSlice = createSlice({
  name: "followers",
  initialState: {
    followers: 100500,
    isFollowed: false,
  },
  reducers: {
    toggleFollowing(state) {
      if (state.isFollowed) {
        state.followers -= 1;
      } else {
        state.followers += 1;
      }
    },
  },
});
export const { toggleFollowing } = followingStatusSlice.actions;
export default followingStatusSlice.reducer;
