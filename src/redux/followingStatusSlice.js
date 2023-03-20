import { createSlice } from "@reduxjs/toolkit";
import users from "../assets/users/users.json";

const usersList = users;

const followingStatusSlice = createSlice({
  name: "followers",
  initialState: {
    users: usersList,
    isFollowing: [],
  },

  reducers: {
    addFollowing(state, action) {
      const user = state.users.find((user) => user.id === action.payload);
      user.followers += 1;
      state.isFollowing.push(action.payload);
    },
    removeFollowing(state, action) {
      const user = state.users.find((user) => user.id === action.payload);
      user.followers -= 1;
      const index = state.isFollowing.indexOf(action.payload);
      state.isFollowing.splice(index, 1);
    },
  },
});
export const { toggleFollowing, addFollowing, removeFollowing } =
  followingStatusSlice.actions;
export default followingStatusSlice.reducer;
