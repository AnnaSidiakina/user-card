import React from "react";
import {
  Container,
  ImageContainer,
  AvatarSectionContainer,
  Divider,
  AvatarContainer,
  HeaderContainer,
  ContentContainer,
  Text,
  Button,
  Avatar,
} from "./UserItem.styled";
import logo from "../../assets/logo.png";
import bgImage from "../../assets/bgImage.png";
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
        <img src={logo} alt="Logo" />
        <ImageContainer>
          <img src={bgImage} alt="bgImage" />
        </ImageContainer>
      </HeaderContainer>

      <AvatarSectionContainer>
        <Divider></Divider>
        <AvatarContainer>
          <Avatar src={avatar} alt="Avatar" />
        </AvatarContainer>
        <Divider></Divider>
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
