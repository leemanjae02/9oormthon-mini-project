import styles from "../styles/Leftside.module.less";

const Leftside = () => {
  return (
    <div className={styles.leftside}>
      <div className={styles.profil}>
        <div className={styles.infor}>
          <img src="/public/img/profil.png" />
          <p className={styles.nickname}>이만재02</p>
          <p className={styles.school}>이만재</p>
          <p className={styles.school}>leemanjae</p>
          <ul className={styles.btnBox}>
            <li>
              <a href="/my">내 정보</a>
            </li>
            <li>
              <a href="#">로그아웃</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <a href="#" className={styles.myarticle}>
            내가 쓴 글
          </a>
          <a href="#" className={styles.mycommentarticle}>
            댓글 단 글
          </a>
          <a href="#" className={styles.myscrap}>
            내 스크랩
          </a>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
