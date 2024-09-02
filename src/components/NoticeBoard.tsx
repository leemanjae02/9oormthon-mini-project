import styles from "../styles/NoticeBoard.module.less";

const NoticeBoard = () => {
  return (
    <div>
      <div className={styles.wraptitle}>
        <h1>
          <a href="#">자유게시판</a>
        </h1>
      </div>
      <div className={styles.wraparticle}>
        <article className={styles.item}>
          <a className={styles.article}>
            <img src="/img/profil.png" />
            <div className={styles.profil}>
              <h3 className={styles.usertype}>익명</h3>
              <time>09/02 20:36</time>
            </div>
            <ul className={styles.status}>
              <li>쪽지</li>
              <li>신고</li>
            </ul>
            <hr />
            <h2>테스트</h2>
            <p>
              테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트
            </p>
            <ul className={styles.leftbtn}>
              <li title="공감" className={styles.vote}>
                0
              </li>
              <li title="댓글" className={styles.comment}>
                1
              </li>
              <li title="스크랩" className={styles.scrap}>
                0
              </li>
            </ul>
          </a>
        </article>
      </div>
    </div>
  );
};

export default NoticeBoard;
