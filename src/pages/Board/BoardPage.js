import React, { useEffect } from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components"
import boardImage from "../../assets/image/bg-board.png"
import { Memo } from "../../components/Card/Memo"
import axios from "axios";
import { useState } from "react";
import { FloatButton } from "../../components/Common/FloatButton";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
`;

const Text = styled.div`
  font-size: 24px;
  color: #fff;
  font-family: 'NOTO SANS KR';
  font-weight: 600;
  margin-bottom: 30px;
  margin-right: 30px;
`

const BoardWrapper = styled.div`
  flex: 1 1 0px;
`;

const Board = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${boardImage});
  border: 50px solid #301E22;
  width: 100%;
  max-width: 1200px;
  /* height: 500px; */
  min-width: 400px;
  margin: 100px;
  padding: 30px;
  height: 150%;
  flex-wrap: wrap;
`

const BoardPage = ({ history }) => {
  const [memos, setMemos] = useState([])
  useEffect(() => {
    axios.get("/api/memo/getMemos").then((response) => {
      console.log(response.data.memos)
      setMemos(response.data.memos)
    })
  },[])
  const MemoList = memos?.map((data, index) => {
    return <Memo data={data} key={index} />
  })
  return (
    <>
      <Header />
      <PageContainer>
        <Board>
        <Text>필요한 재능 기부가 아직 안 올라왔나요?<br />원하는 재능 기부를 포스트잇으로 남겨주세요<br />누군가 재능 기부를 올려줄지도 몰라요!</Text>
          {MemoList}
        </Board>
        <FloatButton data={"포스트잇 작성하기"} link={"/board/write"}/>
      </PageContainer>
    </>
  );
};

export default BoardPage;
