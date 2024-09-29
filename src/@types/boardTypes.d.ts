interface BoardData {
  boardId: number;
  boardName: string;
  totalPage?: number;
  posts: Post[];
}

interface Post {
  postId: number;
  postTitle: string;
  postContent: string;
  author?: string; // 전체 게시판 조회시에는(메인페이지) 익명, 좋아요, 댓글이 필요 없음
  likes?: number;
  comments?: number;
}

interface Comment {
  commentId: number;
  author: string;
  content: string;
}

interface ArticleData {
  boardName: string;
  postId: number;
  author: string;
  timestamp: string;
  title: string;
  content: string;
  likes: number;
  commentsCount: number;
  scrapsCount: number;
  comments: Comment[];
}
