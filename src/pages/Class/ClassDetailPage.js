import React, { useEffect, useState } from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import image from "../../assets/image/thumnail.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { ClassList } from "../../components/List/ClassList";

const TEXTSTYLE = {
    // font-size, color, margin-right
    "TITLE": ['36px', 'black', '20px'],
    "WRITER": ['16px', 'gray', '20px'],
    "CONTENT": ['24px', 'black', '20px'],
    "ETC": ['20px', 'black', '20px']
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  max-width: 1500px;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1500px;
`

const ImageWrapper = styled.div`
  background-image: url(${image});
  background-color: black;
  width: 600px;
  height: 300px;
  margin-right: 100px;
`;

const ContentWrapper = styled.div`
  width: 50%;
  height: 100%;
`
const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Text = styled.p`
  margin-bottom: 30px;
  font-family: "NOTO SANS KR";
  font-size: ${props => TEXTSTYLE[props.type][0]};
  color: ${props => TEXTSTYLE[props.type][1]};
  margin: ${props => TEXTSTYLE[props.type][2]};
`
const SubmitButton = styled.button`
  margin : 0 auto;
  background-color: #F37579;
  /* border: 3px solid #0; */
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 15px 0;
`
const OtherWrapper = styled.div``

const FavoriteButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: 0;
  border: none;
  margin-right: 6px;
`;


// 신청하기 버튼 /registerClass
// setOtehrs 바뀌면 반영
const ClassDetailPage = ({ history }) => {
  const location = useLocation();
  const classId = location.state.data;
  const user = useSelector((store) => store.userReducer.userId);
  const [post, setPost] = useState([]);
  const [others, setOthers] = useState([]);
  const [heart, setHeart] = useState(false); // hard-coding
  const [favoritesnum, setFavoritesnum] = useState(null);

  useEffect(() => {
    axios
      .post("/api/class/getClassDetail", { _id: classId })
      .then((response) => {
        if(response.data.success) {
          console.log(response.data.result);
          setPost(response.data.result);
          setFavoritesnum(response.data.result.favorites.length);
        }
        
        axios
        .get(`/api/class/getClassList?category=${response.data.result.category}`)
        .then((response) => {
          if (response.data.success) {
            setOthers(response.data.result);
          }
        });
      });
      
  }, [classId]);

  useEffect(() => {
    setHeart(post.favorites && post.favorites.includes(user));
  }, [post.favorites, user]);

  const favoriteHandler = (values) => {
    // body : userId, classId
    const favorite = {
      userId: user,
      classId: post._id
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
    <>
      <Header />
      <PageContainer>
        <PostWrapper>
        <ImageWrapper></ImageWrapper>
          <ContentWrapper>
              <FavoriteButton onClick={(e) => buttonClickHandler(e)}>
                {heart ? (
                  <img
                    src={require("../../assets/icons/heart-selected.svg").default}
                  />
                ) : (
                  <img
                    src={require("../../assets/icons/heart-default.svg").default}
                  />
                )}
              </FavoriteButton>
              <p style={{ lineHeight: "16px", margin: 0 }}>{favoritesnum+20}</p>
              <Text type={'TITLE'}>{post.title}</Text>
              <Text type={'WRITER'}>{post.writer?.name}</Text>
              <Text type={'WRITER'}>{post.category}</Text>
              <Text type={'CONTENT'}>{post.content}</Text>
              <SubmitButton>신청하기</SubmitButton>
          </ContentWrapper>
          </PostWrapper>
          <OtherWrapper>
            <ClassList data={others}/>
          </OtherWrapper>
      </PageContainer>
    </>
  );
};

export default ClassDetailPage;
