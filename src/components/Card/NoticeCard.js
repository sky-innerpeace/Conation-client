import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 80%;
    height: 100%;
    border-radius: 6px;
    margin-bottom: 20px;
    background-color: #D9D9D9;
`;

const Text = styled.div`
    font-size: 20px;
    margin: 20px;
`
export const NoticeCard = (props) => {
    const data = props.data;
    // console.log(data)
    // 닉네임 data.applicant.name
    // 타이틀 data.class.title
    // 신청 마감 여부
    return (
        <CardWrapper>
            {data &&
            <Text>{data?.applicant?.name}님이 {data?.class?.title} 클래스를 신청하였습니다.</Text>
            }
        </CardWrapper>
    )
}