import { useState } from "react";
import styles from "../styles/Default.module.less";

const DefaultContainer = () => {
  const [active, setActive] = useState<number>(0);

  const handleActive = (activeNum: number) => {
    setActive(activeNum);
  };
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/img/logo.png" />
            </a>
            <p>
              <span className={styles.name}>에브리타임</span>
              <span className={styles.subname}>성공회대</span>
            </p>
          </div>
          <div className={styles.account}>
            <a href="/message" className={styles.icon1} />
            <a href="/my" className={styles.icon2} />
          </div>
          <ul className={styles.menu}>
            <li className={`${active === 1 ? styles.active : ""}`}>
              <a href="/" onClick={() => handleActive(1)}>
                게시판
              </a>
            </li>
            <li className={`${active === 2 ? styles.active : ""}`}>
              <a href="/friend" onClick={() => handleActive(2)}>
                친구
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DefaultContainer;
