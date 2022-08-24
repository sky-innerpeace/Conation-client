import React, { useEffect, useState } from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import image from "../../assets/image/thumnail.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const PageContainer = styled.div`
  position: relative;
  width: 74%;
  max-width: 1500px;
  background-color: black;
  margin: 0 auto;
`;

const Image = styled.div`
  background-image: url(image);
  float: left;
`;
const ClassDetailPage = ({ history }) => {
  const location = useLocation();
  const classId = location.state.data;
  const user = useSelector((store) => store.userReducer.userId);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .post("/api/class/getClassDetail", { _id: classId })
      .then((response) => {
        console.log(response.data.result);
        setPost(response.data.result);
      });
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <Image></Image>
      </PageContainer>
    </>
  );
};

export default ClassDetailPage;
