import styles from "../styles/HotBoard.module.less";

const HotBoard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.board}>
        <h3>
          <a>HOT 게시물</a>
          <span>더보기</span>
        </h3>
        <a href="#" className={styles.list}>
          <time>09/03 16:44</time>
          <p>test</p>
        </a>
      </div>
    </div>
  );
};

export default HotBoard;
