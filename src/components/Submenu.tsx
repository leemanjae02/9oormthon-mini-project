import styles from "../styles/submenu.module.less";

const Submenu = () => {
  return (
    <div className={styles.submenu}>
      <div className={styles.wrap}>
        <ul>
          <li>
            <a href="/boards">자유게시판</a>
          </li>
          <li>
            <a href="/2">비밀게시판</a>
          </li>
          <li>
            <a href="/3">졸업생게시판</a>
          </li>
          <li>
            <a href="/4">새내기게시판</a>
          </li>
          <li>
            <a href="/5">시사・이슈</a>
          </li>
          <li>
            <a href="/6">정보게시판</a>
          </li>
          <li>
            <a href="/7">취업・진로</a>
          </li>
          <li>
            <a href="/8">홍보게시판</a>
          </li>
          <li>
            <a href="/9">동아리・학회</a>
          </li>
          <li>
            <a href="/10">미디어센터</a>
          </li>
          <li>
            <a href="/11">기숙사게시판</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Submenu;
