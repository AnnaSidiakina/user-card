import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  height: 460px;
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
  padding: 20px 20px 0 20px;
`;
export const ImageContainer = styled.div`
  width: 308px;
  height: 168px;
  object-fit: cover;
  margin: -20px auto 0 auto;
`;

export const AvatarSectionContainer = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  z-index: 1;
`;

export const AvatarContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  width: 150px;
  box-shadow: 0px 4.39163px 4.39163px -4px rgba(0, 0, 0, 0.06),
    0px 0px 10px 2px #ae7be3, 0px 0px 0px 8px #fbf8ff;
  border-radius: 50%;
  z-index: 2;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
`;

export const ContentContainer = styled.div`
  padding: 26px 20px 36px 20px;
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
  padding: 14px;
  width: 196px;
  border-radius: 10.3108px;
  cursor: pointer;
  background: ${({ isFollowed }) =>
    isFollowed ? "#5CD3A8 !important" : "#ebd8ff !important"};

  &:hover {
    background: ${({ isFollowed }) =>
      isFollowed ? "#34cf96 !important" : "#d3a8ff !important"};
  }
`;
