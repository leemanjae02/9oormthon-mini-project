import React, { useState } from "react";
import styles from "../styles/NoticeBoard.module.less";
import Write from "./Write.tsx";

interface BoardDataProps {
  boardName: string;
  posts: Post[];
  handleNext: () => void;
  handlePrev: () => void;
}

const NoticeBoard: React.FC<BoardDataProps> = ({
  boardName,
  posts,
  handleNext,
  handlePrev,
}) => {
  const [write, setWrite] = useState<boolean>(false);

  const handleWrite = (e: React.MouseEvent) => {
    e.preventDefault();
    setWrite(!write);
  };

  return (
    <div>
      <div className={styles.wraptitle}>
        <h1>
          <a href="#">{boardName}</a>
        </h1>
      </div>
      <div className={styles.wrapbubbles}>
        <div className={styles.question}>
          <div className={styles.group}></div>
          <div className={styles.items}>
            <div className={styles.item}>
              <a href="#">
                <span>test</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.popular}>
          <div className={styles.group}></div>
          <div className={styles.items}>
            {posts.map((post) => (
              <div className={styles.item} key={post.postId}>
                <a href="#">
                  <span>{post.postTitle}</span>
                  <div className={styles.posvote}>{post.likes}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.wraparticles}>
        {write ? (
          <>
            <Write setWrite={setWrite} />
          </>
        ) : (
          <a className={styles.wraparticlebtn} onClick={handleWrite}>
            새 글을 작성해주세요!
          </a>
        )}

        <div className={styles.articlelist}>
          {posts.map((post) => (
            <a href="#" key={post.postId} className={styles.articleitem}>
              <div className={styles.desc}>
                <h2 className={styles.mediumbold}>{post.postTitle}</h2>
                <p className={styles.medium}>{post.postContent}</p>
                <div className={styles.info}>
                  <time className={styles.tsmall}></time>
                  <h3 className={styles.hsmall}>{post.author}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.paginationBtn}>
          <button className={styles.prev} onClick={handlePrev}>
            이전
          </button>
          <button className={styles.next} onClick={handleNext}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
