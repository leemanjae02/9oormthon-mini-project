interface BoardData {
  boardId: number;
  boardName: string;
  posts: Post[];
}

interface Post {
  id: number;
  title: string;
  content: string;
}

interface NoticeBoardData {
  boardId: number;
  boardName: string;
  articles: NoticeBoardArticle[];
}

interface NoticeBoardArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  votes: number;
  comments: number;
}
interface Comment {
  commentId: number;
  author: string;
  timestamp: string;
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

interface MyComment {
  postId: string;
  boardName: string;
  postTitle: string;
  postContent: string;
  author: string;
  votes: number;
  comment: number;
}
interface MyCommentData {
  myComments: MyComment[];
}

interface JoinData {
  studentNumber: string;
  universityName: string;
  name: string;
  email: string;
  id: string;
  password: string;
  checkPassword: string;
}
