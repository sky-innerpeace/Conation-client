import React from "react";
import styled from "styled-components";
import { ClassCard } from "../Card/ClassCard";
const ListContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px;
`;
// justify-content 빼기
export const ClassList = ({ props }) => {
  // const CardList = data.map((class, index) => {
  //   return <ClassCard data={class}/>
  // })
  return (
    <ListContainer>
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      <ClassCard />
      {/* {CardList} */}
    </ListContainer>
  );
};
