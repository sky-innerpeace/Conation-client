import React from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components"
import boardImage from "../../assets/image/bg-board.png"
import { Memo } from "../../components/Card/Memo"

const PageContainer = styled.div`
  width: 100%;
  display: flex;
`;

const BoardWrapper = styled.div`
  flex: 1 1 0px;
`;

const Board = styled.div`
  display: inline-flex;
  flex-direction: row;
  background-image: url(${boardImage});
  width: 100%;
  max-width: 1200px;
  height: 500px;
  min-width: 400px;
  margin: 100px;
  padding: 30px;
  flex-wrap: wrap;
`
const BoardPage = ({ history }) => {

  return (
    <>
      <Header />
      <PageContainer>
        <Board>
          <Memo></Memo>
          <Memo></Memo>
        </Board>
      </PageContainer>
    </>
  );
};

export default BoardPage;
