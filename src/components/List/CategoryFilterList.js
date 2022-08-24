import React, { useState } from "react";
import styled from "styled-components";
import CategoryData from "../../assets/data/CategoryData";

const Category = styled.div`
  background-color: #f37579;
  width: 100%;
  height: 180px;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
`;

const Img = styled.img`
  width: ${(props) => (props.clicked ? 85 : 80)}px;
  height: ${(props) => (props.clicked ? 85 : 80)}px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border-top-left-radius: 55px;
  border-top-right-radius: 55px;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px; */
  border-radius: 55px;
  align-items: center;
  margin: auto;
  background-color: ${(props) => (props.clicked ? "#981B45" : "none")};
`;

const Text = styled.p`
  text-align: center;
  margin-top: 10px;
  margin: 20px;
  color: #fff;
  font-family: "NOTO SANS KR";
`;

export const CategoryFilterList = (props) => {
  let filter = props.filter;
  let setFilter = props.setFilter;

  const clickHandler = (category) => {
    setFilter(category);
  };

  return (
    <Category>
      <TagWrapper
        clicked={filter && filter.includes("언어")}
        onClick={() => {
          clickHandler("언어");
        }}
      >
        <Img
          clicked={filter && filter.includes("언어")}
          src={require("../../assets/icons/category-language.png")}
        />
        <Text clicked={filter && filter.includes("언어")}>언어</Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("스포츠")}
        onClick={() => {
          clickHandler("스포츠");
        }}
      >
        <Img
          clicked={filter && filter.includes("스포츠")}
          src={require("../../assets/icons/category-sports.png")}
        />
        <Text clicked={filter && filter.includes("스포츠")}>스포츠</Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("프로그래밍")}
        onClick={() => {
          clickHandler("프로그래밍");
        }}
      >
        <Img
          clicked={filter && filter.includes("프로그래밍")}
          src={require("../../assets/icons/category-programming.png")}
        />
        <Text clicked={filter && filter.includes("프로그래밍")}>
          프로그래밍
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("자격증스터디")}
        onClick={() => {
          clickHandler("자격증스터디");
        }}
      >
        <Img
          src={require("../../assets/icons/category-study.png")}
          clicked={filter && filter.includes("자격증스터디")}
        />
        <Text clicked={filter && filter.includes("자격증스터디")}>
          자격증
          <br />
          스터디
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("회화공예")}
        onClick={() => {
          clickHandler("회화공예");
        }}
      >
        <Img
          src={require("../../assets/icons/category-art.png")}
          clicked={filter && filter.includes("회화공예")}
        />
        <Text clicked={filter && filter.includes("회화공예")}>
          회화
          <br />
          공예
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("독서글쓰기")}
        onClick={() => {
          clickHandler("독서글쓰기");
        }}
      >
        <Img
          src={require("../../assets/icons/category-writing.png")}
          clicked={filter && filter.includes("독서글쓰기")}
        />
        <Text clicked={filter && filter.includes("독서글쓰기")}>
          독서
          <br />
          글쓰기
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("디자인")}
        onClick={() => {
          clickHandler("디자인");
        }}
      >
        <Img
          src={require("../../assets/icons/category-design.png")}
          clicked={filter && filter.includes("디자인")}
        />
        <Text clicked={filter && filter.includes("디자인")}>디자인</Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("음악악기")}
        onClick={() => {
          clickHandler("음악악기");
        }}
      >
        <Img
          src={require("../../assets/icons/category-music.png")}
          clicked={filter && filter.includes("음악악기")}
        />
        <Text clicked={filter && filter.includes("음악악기")}>
          음악
          <br />
          악기
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("요리베이킹")}
        onClick={() => {
          clickHandler("요리베이킹");
        }}
      >
        <Img
          src={require("../../assets/icons/category-cooking.png")}
          clicked={filter && filter.includes("요리베이킹")}
        />
        <Text clicked={filter && filter.includes("요리베이킹")}>
          요리
          <br />
          베이킹
        </Text>
      </TagWrapper>
      <TagWrapper
        clicked={filter && filter.includes("기타")}
        onClick={() => {
          clickHandler("기타");
        }}
      >
        <Img
          src={require("../../assets/icons/category-etc.png")}
          clicked={filter && filter.includes("기타")}
        />
        <Text clicked={filter && filter.includes("기타")}>기타</Text>
      </TagWrapper>
    </Category>
  );
};
