import React from "react";
import styled from "styled-components";
import { ClassCard } from "../Card/ClassCard";

const ListContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  max-width: 1500px;
  margin: 0 auto;
  padding: 36px;
`;
// justify-content 빼기
export const ClassList = (props) => {
  // console.log(props.data);
  const userId = props.user || null;
  const data = props.data || null;
  const hasBorder = props.hasBorder || null;
  const CardList = data?.map((data, index) => {
    return <ClassCard data={data} key={index} />;
  });

  return (
    <ListContainer>
      {CardList}
    </ListContainer>
  );
};
