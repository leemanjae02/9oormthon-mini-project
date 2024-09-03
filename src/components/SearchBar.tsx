import styles from "../styles/SearchBar.module.less";

const SearchBar = () => {
  return (
    <form className={styles.search}>
      <input type="text" placeholder="전체 게시판의 글을 검색하세요!"></input>
    </form>
  );
};

export default SearchBar;
