import { useParams } from "react-router-dom";
import Post from "../components/Post.tsx";
import styles from "../styles/ArticlePage.module.less";
import DefaultContainer from "../components/DefaultContainer.tsx";
import Submenu from "../components/Submenu.tsx";
import LivePopularPosts from "../components/LivePopularPosts.tsx";
import HotArticle from "../components/HotArticle.tsx";
import { useEffect, useState } from "react";
import { getPost } from "../service/BoardService.ts";
import CustomError from "../components/CustomError.tsx";

const PostsPage = () => {
  const { boardId, postId } = useParams<{ boardId: string; postId: string }>(); // 경로 매개변수 가져오기
  const [postsData, setPostsData] = useState<PostsData | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      if (boardId && postId) {
        // boardId와 postId가 있는 경우에만 요청
        try {
          const response = await getPost(Number(boardId), Number(postId));

          if (response) {
            console.log(response);
            setPostsData(response);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getPosts();
  }, [boardId, postId]);

  if (!postsData)
    return (
      <div>
        <CustomError />
      </div>
    );

  console.log("데이터 출력", postsData);

  return (
    <div className={styles.container}>
      <DefaultContainer />
      <Submenu />
      <div className={styles.componentsBox}>
        <div className={styles.mainContainer}>
          <div className={styles.center}>
            {Array.isArray(postsData) && <Post posts={postsData} />}
          </div>
          <div className={styles.rightside}>
            <LivePopularPosts />
            <HotArticle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
