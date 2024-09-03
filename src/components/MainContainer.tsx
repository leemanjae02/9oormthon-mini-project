import { useEffect, useState } from "react";
import styles from "../styles/MainContainer.module.less";
import MiniNoticeBoard from "./MiniNoticeBoard";
import axios from "axios";

import Leftside from "./Leftside";
import LivePopularPosts from "./LivePopularPosts";
import HotBoard from "./HotBoard";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [boards, setBoards] = useState<BoardData[]>([]);

  useEffect(() => {
    const getNoticeBoard = async () => {
      try {
        const response = await axios.get("http://localhost:3001/boards");
        if (response.status === 200) {
          setBoards(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getNoticeBoard();
  }, []);
  console.log("c", boards);
  return (
    <div className={styles.mainContainer}>
      <Leftside />
      <div className={styles.center}>
        {boards.map((board) => (
          <MiniNoticeBoard
            key={board.boardId}
            boardId={board.boardId}
            boardName={board.boardName}
            posts={board.posts}
          />
        ))}
      </div>
      <div className={styles.rightside}>
        <SearchBar />
        <LivePopularPosts />
        <HotBoard />
      </div>
    </div>
  );
};

export default MainContainer;
