import React from "react";
import UserCard from "./components/UserCard/UserCard";
import { Container } from "./App.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFollowers, getIsFollowing } from "./redux/selectors";
import { toggleFollowing } from "./redux/followingStatusSlice";

function App() {
  // transfer tweets value
  const totalTweets = 777;

  const isFollowing = useSelector(getIsFollowing);
  const totalFollowers = useSelector(getFollowers);
  const dispatch = useDispatch();

  // convert followers number to string with comma
  const convertedTotalFollowers = totalFollowers.toLocaleString("en-US");

  const handleClick = () => {
    dispatch(toggleFollowing());
  };

  return (
    <Container>
      <UserCard
        totalTweets={totalTweets}
        totalFollowers={convertedTotalFollowers}
        handleClick={handleClick}
        isFollowed={isFollowing}
      />
    </Container>
  );
}

export default App;
