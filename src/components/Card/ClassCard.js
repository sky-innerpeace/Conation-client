import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import image from "../../assets/image/thumnail.png";
import { useSelector } from "react-redux";
import axios from "axios";

const CLASS = {
  // font-size, margin-top, color
  CATEGORY: ["14px", "0", "gray"],
  TITLE: ["20px", "0", "black"],
  CONTENT: ["14px", "10px", "black"],
};
const CardContainer = styled(Link)`
  width: 50%;
  max-width: 240px;
  height: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 24px 20px;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 92%;
  height: 41%;
  margin: 10px;
  margin-bottom: 0;
  overflow: hidden;
  top: 0;
`;

const TextWrapper = styled.div`
  margin-top: 12px;
  padding: 0 20px;
`;

const TextBox = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: ${(props) => (props.type === "TITLE" ? 1 : 3)};
  color: ${(props) => CLASS[props.type][2]};
  font-size: ${(props) => CLASS[props.type][0]};
  margin-top: ${(props) => CLASS[props.type][1]};
`;

const ButtonWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;
const FavoriteButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: 0;
  border: none;
  margin-right: 6px;
`;

export const ClassCard = (props) => {
  // user 정보 받아오기
  const data = props.data;
  const [favoritesnum, setFavoritesnum] = useState(props.data.favorites.length);
  const [heart, setHeart] = useState(false); // hard-coding
  const userId = useSelector((store) => store.userReducer.userId);

  useEffect(() => {
    setHeart(data.favorites.includes(userId));
  }, [data.favorites, userId]);

  const favoriteHandler = (values) => {
    // body : userId, classId
    const favorite = {
      userId: userId,
      classId: data._id
    }
    // axios 요청 보내기 /postFavorite
    axios.post("/api/favorite/postFavorite", favorite).then((response) => {
      if (response.data.success) {
        setHeart(response.data.heart);  // 버튼 아이콘 변경
        if(response.data.heart){
          setFavoritesnum(favoritesnum+1);  // 찜하기: 개수 +1
        } else {
          setFavoritesnum(favoritesnum-1);  // 찜 취소: 개수 -1
        }
      }
    });
  };
  const buttonClickHandler = (event) => {
    event.preventDefault();
    // 로그인 안 했을 때 예외처리해야 함
    // 로그인 안 한 유저에게는 toast 띄우기
    setHeart(!heart);
    favoriteHandler();
  };

  return (
    <CardContainer to={`/class/detail`} state={{ data: data && data._id }}>
      {/* {data.image.length > 0 ? <Image src={image} /> : <Image src={require("")} />} */}
      <Image src={data.image} />
      <TextWrapper>
        <TextBox>
          <Text type={"CATEGORY"}>{data.category}</Text>
          <ButtonWrapper>
            <FavoriteButton onClick={(e) => buttonClickHandler(e)}>
              {heart ? (
                <img
                  src={require("../../assets/icons/heart-selected.svg").default}
                  alt=""
                />
              ) : (
                <img
                  src={require("../../assets/icons/heart-default.svg").default}
                  alt=""
                />
              )}
            </FavoriteButton>
            <p style={{ lineHeight: "16px", margin: 0 }}>{favoritesnum}</p>
          </ButtonWrapper>
        </TextBox>
        <Text type={"TITLE"}>{data.title}</Text>
        <Text type={"CONTENT"}>{data.content}</Text>
      </TextWrapper>
    </CardContainer>
  );
};
