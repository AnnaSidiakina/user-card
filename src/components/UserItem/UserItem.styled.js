import styled from "styled-components";
import bgImage from "../../assets/images/bgImage.png";

export const Container = styled.div`
  width: 380px;
  height: 460px;
  padding: 20px 20px 30px 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const HeaderContainer = styled.div`
  //   padding: 20px 20px 0 20px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  height: 168px;
`;

export const Logo = styled.img`
  width: 76px;
`;

export const AvatarSectionContainer = styled.div`
  position: relative;
  margin-top: -10px;
  display: flex;
  //   align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 30px;
    left: -20px;
    content: "";
    height: 8px;
    width: 152px;
    color: #ebd8ff;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &::after {
    position: absolute;
    top: 30px;
    right: -20px;
    content: "";
    height: 8px;
    width: 152px;
    color: #ebd8ff;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  text-align: center;
  width: 62px;
  height: 62px;
  box-shadow: 0px 4.39163px 4.39163px -4px rgba(0, 0, 0, 0.06),
    0px 0px 10px 2px #ae7be3, 0px 0px 0px 8px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
`;

export const ContentContainer = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  color: rgba(55, 55, 55, 1);
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
  padding: 14px;
  width: 196px;
  border-radius: 10.3108px;
  cursor: pointer;
  background: ${({ isFollowed }) =>
    isFollowed ? "#5CD3A8 !important" : "#ebd8ff !important"};
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ isFollowed }) =>
      isFollowed ? "#34cf96 !important" : "#d3a8ff !important"};
  }
`;
