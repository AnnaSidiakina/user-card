import React from "react";
import {
  Container,
  AvatarSectionContainer,
  AvatarContainer,
  HeaderContainer,
  ContentContainer,
  Text,
  Button,
  Avatar,
  Logo,
} from "./UserItem.styled";
import logo from "../../assets/images/logo.png";
import { getIsFollowing } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addFollowing,
  removeFollowing,
} from "../../redux/followingStatusSlice";

const UserItem = ({ id, avatar, tweets, followers }) => {
  const isFollowing = useSelector(getIsFollowing);

  // convert number to string with comma
  function convertedTotalFollowers(followers) {
    return followers.toLocaleString("en-US");
  }
  const dispatch = useDispatch();

  const isFollowed = isFollowing.includes(id);

  const handleClick = (id) => {
    if (isFollowing.includes(id)) {
      dispatch(removeFollowing(id));
    } else {
      dispatch(addFollowing(id));
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo src={logo} alt="Logo" />
      </HeaderContainer>

      <AvatarSectionContainer>
        <AvatarContainer>
          <Avatar src={avatar} alt="Avatar" />
        </AvatarContainer>
      </AvatarSectionContainer>
      <ContentContainer>
        <Text>{tweets} Tweets</Text>
        <Text>{convertedTotalFollowers(followers)} Followers</Text>

        <Button
          onClick={() => {
            handleClick(id);
          }}
          isFollowed={isFollowed}
        >
          {isFollowed ? "Following" : "Follow"}
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default UserItem;
