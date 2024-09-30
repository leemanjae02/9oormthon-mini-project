interface BoardData {
  boardId: number;
  boardName: string;
  totalPages?: number;
  posts: Post[];
}

interface Post {
  boardId: ?number;
  boardName?: string;
  postId: number;
  authorId: number;
  postTitle: string;
  postContent: string;
  author?: string; // 전체 게시판 조회시에는(메인페이지) 익명, 좋아요, 댓글이 필요 없음
  likes?: number;
  commentsCount?: number;
  scrapsCount?: number;
  timestamp?: string;
}

interface Comment {
  commentId: number;
  postId: number;
  author: string;
  content: string;
  timestamp: string;
}

interface PostsData {
  posts: Post[];
}
