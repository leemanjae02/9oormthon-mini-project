import DefaultContainer from "../components/DefaultContainer";
import MainContainer from "../components/MainContainer";
import Submenu from "../components/Submenu";
import styles from "../styles/MainPage.module.less";
const MainPage = () => {
  return (
    <>
      <div className={styles.container}>
        <DefaultContainer />
        <Submenu />
        <div className={styles.componentsBox}>
          <MainContainer />
        </div>
      </div>
    </>
  );
};

export default MainPage;
