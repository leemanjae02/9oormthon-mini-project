import CustomAxios from "../api/CustomAxios";

export const getMessageBox = async () => {
  try {
    const response = await CustomAxios.get("http://localhost:3005/messageBox");
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log("쪽지함이 비어있습니다.", error);
    return null;
  }
};

export const getMessage = async (messageBoxId: number) => {
  try {
    const response = await CustomAxios.get(
      `http://localhost:3006/messages?messageBoxId=${messageBoxId}`
    );
    if (response.status === 200) {
      console.log("호출", response.data);
      return response;
    }
  } catch (error) {
    console.log("쪽지 불러오기 실패", error);
  }
};

export const SendMessage = async (
  boardId: number | undefined,
  postId: number | undefined,
  messageBoxId: number | undefined,
  newMessage: string,
  senderId: number,
  receiverId: number
) => {
  try {
    console.log(
      "서비스",
      "게시판id",
      boardId,
      "게시글id",
      postId,
      "채팅방id",
      messageBoxId,
      "송신자id",
      senderId,
      "수신자id",
      receiverId,
      "메시지",
      newMessage
    );
    const url = messageBoxId
      ? `http://localhost:3007/messages/${messageBoxId}`
      : `http://localhost:3007/boards/${boardId}/posts/${postId}/createMessage`;

    const response = await CustomAxios.post(url, {
      message: newMessage,
      senderId: senderId,
      receiverId: receiverId,
      timeStamp: new Date().toISOString(),
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log("메시지 전송 실패", error);
    return null;
  }
};
