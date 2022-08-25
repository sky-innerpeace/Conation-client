import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LeftContainer = styled.div`
    width: 80%;
    padding: 15px 20px;
    text-align: right;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color : #981b45;
    margin: 30px;
`

const RightContainer = styled.div`
    width: 80%;
    padding: 15px 20px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 0;
    background-color : #D9D9D9;
    margin: 30px;
`
const Img = styled.img`
    width: 80%;
    vertical-align: middle;
`

const Text = styled.div`
    font-size: 20px;
    padding: 10px;
    color: ${props => props.color};
`

const LinkText = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    font-size: 16px;
    color: ${props => props.color};
`
export const ReviewCard = (props) => {
    const index = props.index
    const data = props.data
    console.log(data)
    return (
        <>
        {index % 2 === 0 ?
            <LeftContainer>
                <LinkText color={'white'} to={'/class/detail'} state={{data: data && data.class?._id}}>{data?.class?.title}</LinkText>
                <Text color={'white'}>{data.content}</Text>
            </LeftContainer>
            :
            <RightContainer>
                <LinkText to={'/class/detail'} state={{data: data && data.class?._id}}>{data?.class?.title}</LinkText>
                <Text color={'black'}>{data.content}</Text>
            </RightContainer>
        }
        </>
    )
}