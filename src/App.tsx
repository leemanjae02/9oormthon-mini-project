import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import BoardPage from "./pages/BoardPage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import MyCommentPage from "./pages/MyCommentPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import MyInforPage from "./pages/MyInforPage.tsx";
import MyPostPage from "./pages/MyPostPage.tsx";
import MyScrapPage from "./pages/MyScrapPage.tsx";
import MessagePage from "./pages/MessagePage.tsx";
import AuthPage from "./Auth.tsx";
function App() {
  return (
    <Routes>
      <Route path="/message/:messageBoxId" element={<MessagePage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/mypost" element={<MyPostPage />} />
      <Route path="/mycomment" element={<MyCommentPage />} />
      <Route path="/myscrap" element={<MyScrapPage />} />
      <Route path="/my" element={<MyInforPage />} />
      <Route path="/boards/:boardId/:postId" element={<ArticlePage />} />
      <Route path="/boards/:boardId" element={<BoardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
