import DefaultContainer from "../components/DefaultContainer";
import NoticeBoard from "../components/NoticeBoard";
import Submenu from "../components/Submenu";
import styles from "../styles/BoardPage.module.less";
const BoardPage = () => {
  return (
    <>
      <div className={styles.container}>
        <DefaultContainer />
        <Submenu />
        <div className={styles.componentsBox}>
          <div className={styles.mainContainer}>
            <div className={styles.center}>
              <NoticeBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardPage;
