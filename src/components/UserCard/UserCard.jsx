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
} from "./UserCard.styled";
import logo from "../../assets/logo.png";
import bgImage from "../../assets/bgImage.png";
import avatar from "../../assets/avatars/avatar1.png";
import PropTypes from "prop-types";

const UserCard = ({ totalTweets, totalFollowers, handleClick, isFollowed }) => {
  return (
    <>
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
            <img src={avatar} alt="Avatar" />
          </AvatarContainer>
          <Divider></Divider>
        </AvatarSectionContainer>
        <ContentContainer>
          <Text>{totalTweets} Tweets</Text>
          <Text>{totalFollowers} Followers</Text>

          <Button onClick={handleClick} isFollowed={isFollowed}>
            {isFollowed ? "Following" : "Follow"}
          </Button>
        </ContentContainer>
      </Container>
    </>
  );
};
UserCard.propTypes = {
  totalTweets: PropTypes.number.isRequired,
  totalFollowers: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFollowed: PropTypes.bool.isRequired,
};
export default UserCard;
