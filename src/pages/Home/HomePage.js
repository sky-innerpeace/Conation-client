import React from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import { ClassCard } from "../../components/Card/ClassCard";
import { ClassList } from "../../components/List/ClassList";
import { useSelector } from "react-redux";

const Home = ({ history }) => {
  const userId = useSelector(({ userId }) => ({
    userId: userId,
  }));
  return (
    <>
      <Header />
      HomePage
    </>
  );
};

export default Home;
