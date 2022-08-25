import React, { useEffect } from 'react';
import styled from 'styled-components';

const colors = ['#FFDB8D', '#F390AF', '#9460A8', '#1DBCB8', '#F27478']

const Container = styled.div`
    width: 200px;
    height: 120%;
    max-height: 150px;
    min-height: 100px;
    background-color: ${props => colors[props.index]};
    transform: rotate(${props => props.degree + 'deg'});
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
    let degree = Math.floor(Math.random() * 30) - 15;
    const data = props.data;

    return (
        <Container index={index} degree={degree}>
            <Text>{data.text}</Text>
        </Container>
    )
}