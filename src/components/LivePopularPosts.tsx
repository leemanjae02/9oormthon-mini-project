import styles from "../styles/LivePopularPosts.module.less";

const LivePopularPosts = () => {
  //title small h4는 li 실제 서버에서 받은 데이터 사용
  return (
    <div className={styles.card}>
      <div className={styles.board}>
        <h3>
          <a>실시간 인기글</a>
        </h3>
        <a className={styles.article}>
          <p className={styles.title}>아무거나</p>
          <p className={styles.small}>
            테스트테스트테스트테스트테스트테스트테스트?
          </p>
          <h4>자유게시판</h4>
          <ul className={styles.status}>
            <li className={styles.vote}>20</li>
            <li className={styles.comment}>7</li>
          </ul>
        </a>
      </div>
    </div>
  );
};

export default LivePopularPosts;
