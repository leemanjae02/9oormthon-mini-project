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
