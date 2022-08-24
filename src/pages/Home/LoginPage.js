import React from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import image from "../../assets/image/bg-login.png";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action/userAction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContainer = styled.div`
  padding: 100px;
  position: relative;
  display: block;
  flex-grow: 1;
  height: 100%;
`;

const BackgroundImage = styled.div`
  display: block;
  position: absolute;
  width: 50%;
  top: 0px;
  right: 0px;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
`;

const FieldWrapper = styled.form`
  flex: 1 1 0px;
  width: 40%;
  text-align: center;
  margin: 200px 0;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: "NOTO SANS KR";
  text-align: center;
  margin: 0 0 ${(props) => props.margin || 72}px;
`;

const Input = styled.input`
  width: 95%;
  height: 50px;
  line-height: normal;
  padding: 0.8em 0.5em;
  font-family: "NOTO SANS KR";
  border: 1px solid #999;
  font-size: 24px;
  border-radius: 6px;
  outline-style: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 30%;
  height: 80px;
  font-family: "NOTO SANS KR";
  color: white;
  background-color: #981b45;
  border: 1px solid #981b45;
  border-radius: 6px;
  font-size: 24px;
`;

const Toast = styled.p`
  font-size: 20px !important;
  color: #000 !important;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (values) => {
    const { email, password } = values || {};
    console.log(email);
    let userInfo = {
      email: email,
      password: password,
    };

    dispatch(loginUser(userInfo)).then((response) => {
      console.log(response);
      if (response.payload) {
        // 로그인 성공
        toast.success(
          <Toast>
            로그인에 성공하였습니다. Conation에서 즐거운 시간 보내세요 ! 😌
          </Toast>,
          {
            position: "top-center",
            autoClose: 1800,
          }
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Container>
          <PageContainer>
            <Header type={"LOGIN"} />
            <BackgroundImage />
            <FieldWrapper onSubmit={handleSubmit} autoComplete="off">
              <Text margin={12}>⭐ 두근두근 ⭐</Text>
              <Text>오늘도 Conation을 찾아주셔서 고마워요</Text>
              <Input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={values.email}
                onChange={handleChange}
                autoComplete="on"
              ></Input>
              <Input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={values.password}
                onChange={handleChange}
                autoComplete="on"
              ></Input>
              <Button type="submit">로그인</Button>
            </FieldWrapper>
          </PageContainer>
          <ToastContainer />
        </Container>
      )}
    </Formik>
  );
};

export default LoginPage;
