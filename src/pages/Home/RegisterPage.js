import React from "react";
import { Header } from "../../components/Common/Menubar";
import styled from "styled-components";
import image from "../../assets/image/bg-login.png";
import { Formik } from "formik";

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
  margin: 150px 0;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 700;
  font-family: "NOTO SANS KR";
  text-align: center;
  margin: 0 0 ${(props) => props.margin || 72}px;
`;

const Input = styled.input`
  width: 95%; /* 원하는 너비 설정 */
  height: 50px;
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: "NOTO SANS KR";
  border: 1px solid #999;
  font-size: 24px;
  border-radius: 6px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
  -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
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

const RegisterPage = ({ history }) => {
  const submit = async (values) => {
    const { name, email, password } = values || {};
    console.log(name);
    console.log(email);
  };
  return (
    <Formik
      initialValues={{
        name: "",
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
              <Text margin={12}>⭐ 세상에 하나뿐인 ⭐</Text>
              <Text>덕성인들의 재능을 찾아보세요</Text>
              <Input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={values.name}
                onChange={handleChange}
                autoComplete="on"
              ></Input>
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
              <Button type="submit">회원가입</Button>
            </FieldWrapper>
          </PageContainer>
        </Container>
      )}
    </Formik>
  );
};

export default RegisterPage;
