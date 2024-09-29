import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultContainer from "../components/DefaultContainer.tsx";
import HotArticle from "../components/HotArticle.tsx";
import LivePopularPosts from "../components/LivePopularPosts.tsx";
import NoticeBoard from "../components/NoticeBoard.tsx";
import Submenu from "../components/Submenu.tsx";
import styles from "../styles/BoardPage.module.less";
import { getBoard } from "../service/BoardService.ts";

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const [boardData, setBoardData] = useState<BoardData | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = boardData?.totalPage;
  const checkTotalPage = totalPage ?? 1; // totalPage !== undefined ? totalPage : 1을 줄인 문법 최신 자바스크립트에서 지원 (nullish coalescing operator)

  const getBoardData = async () => {
    try {
      console.log("내부", currentPage);
      console.log("호출");
      if (boardId) {
        const data = await getBoard(boardId, currentPage);
        console.log(data);
        setBoardData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBoardData();
  }, [boardId, currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < checkTotalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  console.log(currentPage);

  return (
    <div className={styles.container}>
      <DefaultContainer />
      <Submenu />
      <div className={styles.componentsBox}>
        <div className={styles.mainContainer}>
          <div className={styles.center}>
            {boardData && (
              <NoticeBoard
                boardName={boardData.boardName}
                posts={boardData.posts}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />
            )}
          </div>
          <div className={styles.rightside}>
            <LivePopularPosts />
            <HotArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
