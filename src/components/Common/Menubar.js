import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  max-width: 1200px;
  padding: 20px 20px 20px 90px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 0 0px;
`;

const LogoBox = styled.a`
  width: 100px;
  height: 100px;
  margin-right: 200px;
`;

const MyBox = styled.a`
  display: flex;
  flex-direction: column;
`;

const MyText = styled.div`
  margin-top: 10px;
  font-family: "NOTO SANS KR";
  margin: 5px auto;
`;

const Text = styled(NavLink)`
  padding: 30px;
  position: relative;
  font-family: "NOTO SANS KR";
  font-weight: 600;
  margin-right: 70px;
  font-size: 24px;
  text-decoration: none;
  color: black;
  &.active {
    color: #981b45;
  }
`;

const ClassText = styled(Text)`
  &.active::before {
    content: "";
    bottom: -35px;
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    border-bottom: 50px solid #f37579;
    border-left: 36px solid transparent;
    border-right: 36px solid transparent;
    left: 50%;
    background: transparent;
    margin-left: -36px;
  }
`;

export const Header = ({ props }) => {
  // const user = useSelector(({user}) => ({user: user.user}))
  // history.push('/')
  return (
    <HeaderContainer>
      <HeaderMenuWrapper>
        <LogoBox
          onClick={() => {
            window.history.push("/");
          }}
        >
          <img src={require("../../assets/icons/logo.svg").default} alt={""} />
        </LogoBox>
        <ClassText to="/class">재능기부</ClassText>
        <Text to="/board">재능모집</Text>
      </HeaderMenuWrapper>
      <MyBox>
        <img src={require("../../assets/icons/my.svg").default} alt={""} />
        <MyText>내 정보</MyText>
      </MyBox>
    </HeaderContainer>
  );
};