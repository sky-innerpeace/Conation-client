import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Common/Menubar';
import { Field, Formik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    margin-left: 100px;

    max-width: 1500px;
    font-family: 'NOTO SANS KR';
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`

const Title = styled.div`
    font-size: 30px;
    width: 30%;
`

const Textarea = styled.textarea`
    width: 70%;
    height: 200px;
    line-height: normal;
    padding: 0.8em 0.5em;
    font-family: "NOTO SANS KR";
    border: 2px solid #981B45;
    font-size: 24px;
    border-radius: 6px;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
`
const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    right: 0px;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 24px;
    font-family: 'NOTO SANS KR';
    bottom: -10vh;
    color: #fff;
    background-color: #981b45;
    margin-top: 100px;
`

const Text = styled.p`
    font-size: 36px;
`

const BoardWritePage = ({ history }) => {
    const navigate = useNavigate();
    const submit = async (values) => {
        const value = values || {};
        let body = {
            "text": value.content
        }
        axios.post("/api/memo/postMemo", body).then((response) => {
            alert("메모 작성이 완료되었습니다!");
            navigate("/board");
        })
      };
    return (
        <>
            <Header />
            <PageContainer>
            <Text>개설을 원하는 클래스를 포스트잇에 작성해보세요!😎</Text>
            <Formik
              initialValues={{
                store: "",
                writer: "",
                content: "",
              }}
              onSubmit={(data) => submit(data)}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <WriteContainer>
                    <Title>내용</Title>
                    <Textarea
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                    />
                  </WriteContainer>
                  <ButtonWrapper>
                  <Button
                    type="submit"
                  >
                    <div>제출하기</div>
                  </Button>
                  </ButtonWrapper>
                </form>
              )}
            </Formik>
            </PageContainer>
        </>
    )
}

export default BoardWritePage