import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { getTTFB } from 'web-vitals';

const WriteLink = styled(Link)`
    position:fixed;
	width:180px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#981B45;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
    font-family: 'NOTO SANS KR';
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
`;
export const FloatButton = (props) => {
    const data = props.data
    const link = props.link
    return (
        <WriteLink to={link}>
            {data}
            <img src={require("../../assets/icons/arrow-right.png")} 
                width={24} height={24} style={{marginRight:'10px', marginLeft:'10px'}} />
        </WriteLink>
    )
}