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

const UserCard = () => {
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
          <Text>777 Tweets</Text>
          <Text>100,500 Followers</Text>
          <Button>Follow</Button>
        </ContentContainer>
      </Container>
    </>
  );
};
export default UserCard;
