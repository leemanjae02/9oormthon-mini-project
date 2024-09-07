import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/LoginPage";
import MyCommentPage from "./pages/MyCommentPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <Routes>
      <Route path="/mycomment" element={<MyCommentPage />} />
      <Route path="/boards/:boardId/:postId" element={<ArticlePage />} />
      <Route path="/boards/:boardId" element={<BoardPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
