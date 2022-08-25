import React, { useEffect, useState } from "react";
import { Header } from "../../components/Common/Menubar";
import { ClassList } from "../../components/List/ClassList";
import { useSelector } from "react-redux";
import axios from "axios";
import { CategoryFilterList } from "../../components/List/CategoryFilterList";
import { FloatButton } from "../../components/Common/FloatButton";

const ClassListPage = ({ history }) => {
  const userId = useSelector((store) => store.userReducer.userId);
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState(["전체"]);

  useEffect(() => {
    axios.get("/api/class/getClassList").then((response) => {
      if (response.data.success) {
        setPost(response.data.result);
      }
    });
  }, []);

  useEffect(() => {
    console.log(filter);
    if (filter && !filter.includes("전체")) {
      axios
        .get(`/api/class/getClassList?category=${filter}`)
        .then((response) => {
          if (response.data.success) {
            setPost(response.data.result);
          }
        });
    }
  }, [filter]);

  return (
    <>
      <Header />
      <CategoryFilterList filter={filter} setFilter={setFilter} />
      <ClassList data={post} />
      <FloatButton data={'재능 기부하러 가기'} link={'/class/write'} />
    </>
  );
};

export default ClassListPage;
