import { createSlice } from "@reduxjs/toolkit";

const followingStatusSlice = createSlice({
  name: "followers",
  initialState: {
    followers: 100500,
    isFollowed: false,
  },
  reducers: {
    toggleFollowing(state) {
      if (!state.isFollowed) {
        state.followers += 1;
        state.isFollowed = true;
      } else {
        state.followers -= 1;
        state.isFollowed = false;
      }
    },
  },
});
export const { toggleFollowing } = followingStatusSlice.actions;
export default followingStatusSlice.reducer;
