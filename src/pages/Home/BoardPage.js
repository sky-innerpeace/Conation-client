import React, { useEffect } from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components"
import boardImage from "../../assets/image/bg-board.png"
import { Memo } from "../../components/Card/Memo"
import axios from "axios";
import { useState } from "react";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
`;

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
      // console.log(response.data.memos)
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
          {MemoList}
        </Board>
      </PageContainer>
    </>
  );
};

export default BoardPage;
