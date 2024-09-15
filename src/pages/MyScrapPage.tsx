import MyActivity from "../components/MyActivity";
import styles from "../styles/MyCommentPage.module.less";
import DefaultContainer from "../components/DefaultContainer";
import Submenu from "../components/Submenu";
import LivePopularPosts from "../components/LivePopularPosts";
import HotArticle from "../components/HotArticle";
import { useEffect, useState } from "react";
import CustomError from "../components/CustomError";
import { getMyScrap } from "../service/BoardService";
const MyScrapPage = () => {
  const [myActivityData, setMyActivityData] = useState<MyActivity[] | null>(
    null
  );

  useEffect(() => {
    const getMyScrapData = async () => {
      try {
        const response = await getMyScrap();
        if (response) {
          setMyActivityData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMyScrapData();
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
                <p>내 스크랩</p>
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

export default MyScrapPage;
