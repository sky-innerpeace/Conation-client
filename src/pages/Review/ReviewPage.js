import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReviewCard } from '../../components/Card/ReviewCard';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Common/Menubar';
import { FloatButton } from '../../components/Common/FloatButton';

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
`;


const ReviewPage = ({history}) => {
    const [reviews, setReviews] = useState([])
    const user = useSelector((store) => store.userReducer.userId);
    useEffect(() => {
        let body = {
            "userId": user
        }
        axios.post("/api/review/getReviews", body).then((response) => {
            console.log(response.data.review)
            setReviews(response.data.review)
        })
        },[])
    
    const ReviewList = reviews?.map((data, index) => {
        return <ReviewCard data={data} index={index} />
    })
    return (
        <> 
            <Header />
            <PageContainer>
                {ReviewList}
            </PageContainer>
        </>
    )
}

export default ReviewPage;
