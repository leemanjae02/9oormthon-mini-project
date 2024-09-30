interface MessageBox {
  // 쪽지함 데이터 타입
  messageBoxId: number;
  author: string;
  lastMessage: string;
  timeStamp: string;
}

interface Message {
  messageBoxId: number;
  senderId: number;
  receiverId: number;
  senderContent: string | null;
  receiverContent: string | null;
  timeStamp: string;
}

interface MessageResponse {
  boardName?: string;
  postTitle?: string;
  messages: Message[];
}

interface SendMessageType {
  boardId?: number;
  postId?: number;
  messageBoxId?: number;
  receiverId: number;
}
