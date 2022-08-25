import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Common/Menubar';
import { Field, Formik } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    max-width: 1500px;
`;

const Text = styled.p`
    font-size: 36px;
`

const Toast = styled.p`
  font-size: 20px !important;
  color: #000 !important;
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`

const Title = styled.div`
    margin-right: 20px;
    font-size: 30px;
    width: 30%;
`
const Input = styled.input`
    width: 70%;
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

const Select = styled.select`
    margin-bottom: 30px;
    height: 50px;
    width: 200px;
    font-size: 20px;
    padding-left: 10px;
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
`

const ClassWritePage = ({ history }) => {
    const userId = useSelector((store) => store.userReducer.userId);
    const navigate = useNavigate();
    const submit = async (values) => {
        const value = values || {};
        console.log("??")
        
        const frm = new FormData();
        const photoFile = document.getElementById("image");

        frm.append("image", photoFile.files[0]);
        frm.append("title", value.name);
        frm.append("placetype", value.place === 'offline' ? true : false);
        frm.append("category", value.category);
        frm.append("content", value.content);
        frm.append("writer", userId);

        axios.post("/api/class/post", frm, {
            headers: {"Content-Type": "multipart/form-data"},
        }).then((response) => {
          console.log(response);
          alert("글 작성이 완료되었습니다!");
          navigate("/");
        });
      };
    return (
        <>
            <Header />
            <PageContainer>
            <Text>재능 기부 등록</Text>
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
                    <Title>제목</Title>
                    <Input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </WriteContainer>
                  <WriteContainer>
                    <Title>온라인/오프라인</Title>
                    <Select
                        name="place"
                        value={values.place}
                        onChange={handleChange}
                    >
                        <option value="online">온라인</option>
                        <option value="offline">오프라인</option>
                    </Select>
                  </WriteContainer>
                  <WriteContainer>
                    <Title>카테고리</Title>
                    <Select
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                    >
                        <option value="언어">언어</option>
                        <option value="스포츠">스포츠</option>
                        <option value="프로그래밍">프로그래밍</option>
                        <option value="자격증스터디">자격증/스터디</option>
                        <option value="회화공예">회화/공예</option>
                        <option value="독서글쓰기">독서/글쓰기</option>
                        <option value="디자인">디자인</option>
                        <option value="음악악기">음악/악기</option>
                        <option value="요리베이킹">요리/베이킹</option>
                        <option value="기타">기타</option>
                    </Select>
                  </WriteContainer>
                  <WriteContainer>
                    <Title>내용</Title>
                    <Textarea
                      type="text"
                      name="content"
                      value={values.content}
                      onChange={handleChange}
                    />
                  </WriteContainer>
                  <WriteContainer>
                    <Title>사진</Title>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      alt="사진"
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

export default ClassWritePage