import React from "react";
import { Header } from "../../components/Common/Menubar";
import { ClassList } from "../../components/List/ClassList";

const ClassListPage = ({ history }) => {
  return (
    <>
      <Header />
      <ClassList />
    </>
  );
};

export default ClassListPage;
