import React, { useEffect, useState } from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import image from "../../assets/image/thumnail.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { ClassList } from "../../components/List/ClassList";
import Modal from "../../components/Common/Modal";

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

const FavoriteButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: 0;
  border: none;
  margin-right: 6px;
`;

const HeartBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// 신청하기 버튼 /registerClass
// setOtehrs 바뀌면 반영
const ClassDetailPage = ({ history }) => {
  const location = useLocation();
  const classId = location.state.data;
  const user = useSelector((store) => store.userReducer.userId);
  const [post, setPost] = useState([]);
  const [others, setOthers] = useState([]);
  const [isMyPost, setIsMyPost] = useState(false);
  const [heart, setHeart] = useState(false); // hard-coding
  const [favoritesnum, setFavoritesnum] = useState(null);
  const [apply, setApply] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const submitHandler = () => {
    if(user) {
      let body = {
        "writer": post.writer._id,
        "class": post._id,
        "applicant": user
      }
      axios.post("/api/class/register", body).then((response)=>{
        setApply(true)
        openModal()
      })
    } else {
      alert("로그인을 먼저 해야 합니다!")
    }
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }


  useEffect(() => {
    axios
      .post("/api/class/getClassDetail", { _id: classId })
      .then((response) => {
        if(response.data.success) {
          console.log(response.data);
          if(response.data.result.writer._id === user) {
            // 개설자가 본인인 경우
            setIsMyPost(true);
          }
          response.data.applicant.map((app, index) => {
            if(app._id === user) { // 이미 신청 완료한 경우
              setApply(true);
            }
          })
          setPost(response.data.result);
          setFavoritesnum(response.data.result.favorites.length);
          setOthers(response.data.recommend);
        }
      });
      
  }, [classId]);

  useEffect(() => {
    if(user) {
      setHeart(post.favorites && post.favorites.includes(user));
    }
  }, [post, user]);

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
    if (user) {
      setHeart(!heart);
      favoriteHandler();
    } else {
      alert("로그인을 먼저 해야 합니다!")
    }
    
  };

  return (
    <>
      <Header />
      <PageContainer>
        <PostWrapper>
        {modalVisible && 
        <Modal 
          visible={modalVisible} 
          closable={true}
          maskClosable={true}
          onClose={closeModal}>개설자 {post?.writer.name}님의 연락처는 {post?.writer.email}입니다.<br />3일 내에 기부자 덕우에게 연락해주세요.🙂</Modal>
          }
        <ImageWrapper /> 
          <ContentWrapper>

            <Text type={'WRITER'}>{post.placetype ? '[오프라인]' : '[온라인]'}</Text>
            <Text type={'TITLE'}>{post.title}</Text>
            <Box>
            <Text type={'WRITER'}>{post.writer?.name}</Text>
            <HeartBox>
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
              <p style={{ lineHeight: "16px", margin: 0 }}>{favoritesnum}</p>
              </HeartBox>
              </Box>
            <Text type={'WRITER'}>{post.category}</Text>
            <Text type={'CONTENT'}>{post.content}</Text>
            {isMyPost ?
              <></>
            :
            <>
              {apply ?
                <SubmitButton onClick={() => {alert("이미 신청 완료했습니다.")}}>신청 완료</SubmitButton>
                :
                <SubmitButton onClick={() => {submitHandler()}}>신청하기</SubmitButton>
              }
            </>
            }
          </ContentWrapper>
          </PostWrapper>
          <div>
            <ClassList data={others}/>
          </div>
      </PageContainer>
    </>
  );
};

export default ClassDetailPage;
