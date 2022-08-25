import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import ClassListPage from "./pages/Class/ClassListPage";
import ClassDetailPage from "./pages/Class/ClassDetailPage";
import BoardPage from "./pages/Board/BoardPage";
import RegisterPage from "./pages/Home/RegisterPage";
import LoginPage from "./pages/Home/LoginPage";
import MyPage from "./pages/My/Mypage"
import ClassWritePage from "./pages/Class/ClassWritePage";
import BoardWritePage from "./pages/Board/BoardWritingPage";
import ReviewPage from "./pages/Review/ReviewPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<ClassListPage />} />
          <Route path="/class/detail" element={<ClassDetailPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/class/write" element={<ClassWritePage />} />
          <Route path="/board/write" element={<BoardWritePage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
