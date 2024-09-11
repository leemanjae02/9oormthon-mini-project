import React, { useState } from "react";
import styles from "../styles/NoticeBoard.module.less";
import Write from "./Write";

const NoticeBoard: React.FC<NoticeBoardData> = ({ boardName, articles }) => {
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
            {articles.map((article) => (
              <div className={styles.item} key={article.id}>
                <a href="#">
                  <span>{article.title}</span>
                  <div className={styles.posvote}>{article.votes}</div>
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
          {articles.map((article) => (
            <a href="#" key={article.id} className={styles.articleitem}>
              <div className={styles.desc}>
                <h2 className={styles.mediumbold}>{article.title}</h2>
                <p className={styles.medium}>{article.content}</p>
                <div className={styles.info}>
                  <time className={styles.tsmall}></time>
                  <h3 className={styles.hsmall}>{article.author}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
