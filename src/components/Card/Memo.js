import React, { useEffect } from 'react';
import styled from 'styled-components';

const colors = ['#FFDB8D', '#F390AF', '#9460A8', '#1DBCB8', '#F27478']

const Container = styled.div`
    width: 200px;
    height: 100%;
    max-height: 150px;
    background-color: ${props => colors[props.index]};
    /* background-color: #; */
    padding: 30px;
    margin: 10px;
`;

const Text = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 6;
  font-size: 20px;
`;

export const Memo = (props) => {
    // 포스트잇 #FFDB8D #F390AF #9460A8 #1DBCB8 #F27478
    let index = Math.floor(Math.random() * 5);

    
    const data = props.data;

    return (
        <Container index={index}>
            <Text>벌레 잘 잡으시는 분 구합니다 제발 구해주세요 덕성 세스콤을 기다립니다</Text>
        </Container>
    )
}