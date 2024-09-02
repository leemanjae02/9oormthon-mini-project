import React from "react";
import styles from "../styles/MiniNoticeBoard.module.less";

const MiniNoticeBoard: React.FC<BoardData> = ({
  boardName,
  posts,

  boardId,
}) => {
  return (
    <div className={styles.centercard}>
      <div className={styles.board}>
        <h3>
          <a href={String(boardId)}>{boardName}</a>
        </h3>
        <div className={styles.boardList}>
          {posts.map((post) => (
            <a
              href={String(post.id)}
              key={post.id}
              className={styles.boardlist}
            >
              <p>{post.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniNoticeBoard;
