interface MessageBox {
  // 쪽지함 데이터 타입
  chatRoomId: number;
  author: string;
  lastMessage: string;
  timeStamp: string;
}

interface Message {
  chatRoomId: number;
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
  chatRoomId?: number;
  receiverId: number;
}
