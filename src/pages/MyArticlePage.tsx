import MyActivity from "../components/MyActivity";
import styles from "../styles/MyCommentPage.module.less";
import DefaultContainer from "../components/DefaultContainer";
import Submenu from "../components/Submenu";
import LivePopularPosts from "../components/LivePopularPosts";
import HotArticle from "../components/HotArticle";
import { useEffect, useState } from "react";
import CustomError from "../components/CustomError";
import { getMyArticle } from "../service/BoardService";
const MyArticlePage = () => {
  const [myActivityData, setMyActivityData] = useState<MyActivity[] | null>(
    null
  );

  useEffect(() => {
    const getMyArticleData = async () => {
      try {
        const response = await getMyArticle();
        if (response) {
          setMyActivityData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMyArticleData();
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
                <p>내가 쓴 글</p>
              </h1>
            </div>
            {myActivityData ? (
              <MyActivity myActivity={myActivityData} />
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

export default MyArticlePage;
