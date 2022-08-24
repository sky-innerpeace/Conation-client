import React from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderContainer = styled.header`
  ${(props) =>
    props.isShadow &&
    css`
      max-width: 1200px;
    `}
  padding: 20px 20px 20px 90px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  ${(props) => props.isShadow && "box-shadow: 0px 4px rgba(0, 0, 0, 0.25);"}
`;

const HeaderMenuWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 0 0px;
`;

const LogoBox = styled(Link)`
  width: 100px;
  height: 100px;
  margin-right: 200px;
  ${(props) =>
    props.type === "LOGIN" &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    `}
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
  padding: ${(props) => (props.size === "LARGE" ? 30 : 14)}px;
  position: relative;
  font-family: "NOTO SANS KR";
  font-weight: 600;
  font-size: ${(props) => (props.size === "LARGE" ? 24 : 16)}px;
  text-decoration: none;
  color: black;
  &.active {
    color: #981b45;
  }
`;

const ClassText = styled(Text)`
  &.active::before {
    content: "";
    bottom: -25px;
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

export const Header = (props) => {
  const type = props.type;
  const user = useSelector((store) => store.userReducer.userId);

  return (
    <HeaderContainer isShadow={type !== "LOGIN"}>
      <HeaderMenuWrapper>
        <LogoBox to="/" type={"LOGIN"}>
          <img
            src={require("../../assets/icons/logo.png")}
            alt={""}
            width="100px"
            style={{ marginRight: "20px" }}
          />
          {type === "LOGIN" && (
            <img
              src={require("../../assets/icons/COINS.svg").default}
              alt={""}
              width="150px"
            />
          )}
        </LogoBox>
        {type !== "LOGIN" ? (
          <>
            <ClassText to="/class" size={"LARGE"}>
              재능기부
            </ClassText>
            <Text to="/board" size={"LARGE"}>
              재능모집
            </Text>
          </>
        ) : (
          <></>
        )}
      </HeaderMenuWrapper>
      {user ? (
        <MyBox>
          <img src={require("../../assets/icons/my.svg").default} alt={""} />
          <MyText>내 정보</MyText>
        </MyBox>
      ) : (
        <>
          <Text to={"/login"} size={"SMALL"}>
            로그인
          </Text>
          <Text to={"/register"} size={"SMALL"}>
            회원가입
          </Text>
        </>
      )}
    </HeaderContainer>
  );
};
