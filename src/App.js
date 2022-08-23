import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import ClassListPage from "./pages/Class/ClassListPage";
import ClassDetailPage from "./pages/Class/ClassDetailPage";
import BoardPage from "./pages/Home/BoardPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<ClassListPage />} />
          <Route path="/class/:classId" element={<ClassDetailPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
