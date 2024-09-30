import styles from "../styles/Article.module.less";
import { addToScrap } from "../service/BoardService";
import SendMessageModal from "./SendMessageModal";
import { useState } from "react";
import useFormattedDate from "../hook/UseFormattedDate";

const Post: React.FC<PostsData> = ({ posts }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const handelModal = () => {
    setModalStatus(true);
  };
  console.log(
    posts.map((post) => {
      console.log("작성자 id", post.authorId);
    })
  );

  const formatDate = useFormattedDate();
  return (
    <div>
      <div className={styles.wraparticle}>
        {posts?.map((post) => (
          <article className={styles.item} key={post.postId}>
            <div className={styles.wraptitle}>
              <h1>
                <a href={`/boards/${post.boardId}`}>{post.boardName}</a>
              </h1>
            </div>
            {modalStatus && (
              <SendMessageModal
                setModalStatus={setModalStatus}
                boardId={post.boardId as number}
                postId={post.postId}
                receiverId={post.authorId}
              />
            )}
            <a className={styles.article}>
              <img src="/img/profil.png" alt="Profile" />
              <div className={styles.profil}>
                <h3 className={styles.usertype}>{post.author || "익명"}</h3>
                <time>{formatDate(post.timestamp as string)}</time>
              </div>

              <ul className={styles.status}>
                <li onClick={handelModal}>쪽지</li>
                <li>신고</li>
              </ul>
              <hr />
              <h2>{post.postTitle}</h2>
              <p>{post.postContent}</p>
              <ul className={styles.leftbtn}>
                <li title="공감" className={styles.likes}>
                  {post.likes ?? 0}
                </li>
                <li title="댓글" className={styles.comments}>
                  {post.commentsCount ?? 0}
                </li>
                <li title="스크랩" className={styles.scrap}>
                  {post.scrapsCount}
                </li>
              </ul>
              <hr />
              <div className={styles.btns}>
                <span className={styles.posvotebtn}>공감</span>
                <span
                  className={styles.scrapbtn}
                  onClick={() =>
                    addToScrap(post.boardId as number, post.postId)
                  }
                >
                  스크랩
                </span>
              </div>
            </a>
            <div className={styles.commentbox}>
              <form className={styles.writecomment}>
                <input
                  type="text"
                  maxLength={300}
                  autoComplete="off"
                  placeholder="댓글을 입력하세요."
                />
                <ul className={styles.option}>
                  <li className={styles.anonym}></li>
                  <li className={styles.submit}></li>
                </ul>
              </form>
            </div>
          </article>
        ))}
        <div className={styles.pagenation}>
          <a href={`/boards/${posts[0]?.boardId}`} className={styles.list}>
            글 목록
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
