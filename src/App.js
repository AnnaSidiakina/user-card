import React, { useState } from "react";
import UserCard from "./components/UserCard/UserCard";
import { Container } from "./App.styled";
import { useSelector } from "react-redux";
import { getFollowers, getIsFollowing } from "./redux/selectors";

function App() {
  const totalTweets = 777;
  // const totalFollowers = useSelector(getFollowers);
  const [totalFollowers, setTotalFollowers] = useState(100500);
  const convertedTotalFollowers = totalFollowers.toLocaleString("en-US");

  // const isFollowing = useSelector(getIsFollowing);

  // const handleClick = () => {
  //   if (isFollowing === false) {
  //     setTotalFollowers((prev) => prev + 1);
  //     setIsFollowed(true);
  //   } else {
  //     setTotalFollowers((prev) => prev - 1);
  //     setIsFollowed(false);
  //   }
  // };

  const [isFollowed, setIsFollowed] = useState(false);
  const handleClick = () => {
    if (isFollowed === false) {
      setTotalFollowers((prev) => prev + 1);
      setIsFollowed(true);
    } else {
      setTotalFollowers((prev) => prev - 1);
      setIsFollowed(false);
    }
  };
  return (
    <Container>
      <UserCard
        totalTweets={totalTweets}
        totalFollowers={convertedTotalFollowers}
        handleClick={handleClick}
        isFollowed={isFollowed}
      />
    </Container>
  );
}

export default App;
