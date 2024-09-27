import MyActivity from "../components/MyActivity.tsx";
import styles from "../styles/MyCommentPage.module.less";
import DefaultContainer from "../components/DefaultContainer.tsx";
import Submenu from "../components/Submenu.tsx";
import LivePopularPosts from "../components/LivePopularPosts.tsx";
import HotArticle from "../components/HotArticle.tsx";
import { useEffect, useState } from "react";
import { getMyComment } from "../service/BoardService.ts";
import CustomError from "../components/CustomError.tsx";
const MyCommentPage = () => {
  const [myActivityData, setMyActivityData] = useState<BoardData[] | null>(
    null
  );

  useEffect(() => {
    const getMyCommentData = async () => {
      try {
        const response = await getMyComment();
        if (response) {
          setMyActivityData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMyCommentData();
  }, []);
  return (
    <div className={styles.container}>
      <DefaultContainer />
      <Submenu />
      <div className={styles.componentsBox}>
        <div className={styles.mainContainer}>
          <div className={styles.center}>
            <div className={styles.wraptitle}>
              <h1>
                <p>댓글 단 글</p>
              </h1>
            </div>
            {myActivityData ? (
              myActivityData.map((boardData) => (
                <MyActivity key={boardData.boardId} {...boardData} />
              ))
            ) : (
              <CustomError />
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

export default MyCommentPage;
