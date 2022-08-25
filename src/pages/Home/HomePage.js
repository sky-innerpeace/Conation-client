import React from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import { ClassCard } from "../../components/Card/ClassCard";
import { ClassList } from "../../components/List/ClassList";
import { useSelector } from "react-redux";
import logo from "../../assets/icons/logo-big.png"
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import homeImage1 from "../../assets/image/home1.png";
import homeImage2 from "../../assets/image/home2.png";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
`;

const Logo = styled.img`
  padding: 30px;
  height: 140px;
  width: 290px;
`

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
`

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled(Link)`
  padding: ${(props) => (props.size === "LARGE" ? 30 : 14)}px;
  position: relative;
  font-family: "NOTO SANS KR";
  font-weight: 600;
  font-size: ${(props) => (props.size === "LARGE" ? 24 : 16)}px;
  text-decoration: none;
  color: ${props => props.size === "LARGE" ? 'black' : '#981B45'};
  &.active {
    color: #981b45;
  }
`;
const JoinBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  width: 100vw;
  height: 50vw;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  padding-top: 200px;
`
const HeadText = styled.div`
  margin: 0 auto;
  width: 100%;
  text-decoration: underline;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
`;

const TagWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  margin: 20px;
`

const Home = ({ history }) => {
  const userId = useSelector((store) => store.userReducer.userId);
  console.log(userId);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} />
      </HeaderContainer>
      <MenuWrapper>
        <MenuBox>
          <Text to="/class" size={"LARGE"}>
              재능나눔
            </Text>
            <Text to="/board" size={"LARGE"}>
              재능모집
            </Text>
            <Text to="/review" size={"LARGE"}>
              후기게시판
            </Text>
        </MenuBox>
        {!userId &&
          <JoinBox>
          <Text to="/login" size={"SMALL"}>
              로그인
            </Text>
            <Text to="/register" size={"SMALL"}>
              회원가입
            </Text>
        </JoinBox>
        }
      </MenuWrapper>
      <Slider {...settings}>
        <div>
          <Image src={homeImage1} />
        </div>
        <div>
          <Image src={homeImage2} />
        </div>
      </Slider>
      <TextWrapper>
        <HeadText>CATEGORY</HeadText>
      </TextWrapper>
      <TagWrapper>
        <Img
          src={require("../../assets/icons/category-language.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-sports.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-programming.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-study.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-art.png")}
          width='80px' height='80px'
        />
      </TagWrapper>
      <TagWrapper>
        <Img
          src={require("../../assets/icons/category-writing.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-design.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-music.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-cooking.png")}
          width='80px' height='80px'
        />
        <Img
          src={require("../../assets/icons/category-etc.png")}
          width='80px' height='80px'
        />
      </TagWrapper>
    </>
  );
};

export default Home;
