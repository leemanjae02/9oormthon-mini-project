import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/boards" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
