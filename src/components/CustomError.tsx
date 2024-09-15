import styles from "../styles/CustomError.module.less";

const CustomError = () => {
  return (
    <div className={styles.container}>
      <h3>내용을 불러오는데 실패했습니다😭</h3>
    </div>
  );
};
export default CustomError;
