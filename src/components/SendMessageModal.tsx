import { SendMessage } from "../service/MessageService.ts";
import styles from "../styles/SendMessageModal.module.less";
import { useState } from "react";

interface SendMessageModalProps extends SendMessageType {
  setModalStatus: (modalStatus: boolean) => void;
}

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  boardId,
  postId,
  chatRoomId,
  receiverId,
  setModalStatus,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const handleModal = () => {
    setModalStatus(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    const senderId = window.localStorage.getItem("userId");

    e.preventDefault();

    if (!senderId) {
      console.log("로그인 정보가 없습니다.");
      return;
    }
    try {
      const response = await SendMessage(
        boardId,
        postId,
        chatRoomId,
        newMessage,
        Number(senderId),
        receiverId
      );

      if (response) {
        console.log("메시지 보내기 성공");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("메시지 모달", "쪽지함번호", chatRoomId, "수신자", receiverId);
  return (
    <div>
      <div className={styles.modalWrap}></div>
      <form className={styles.modal}>
        <a className={styles.close} onClick={handleModal} />
        <h3>쪽지 보내기</h3>
        <p>
          <textarea
            className={styles.text}
            placeholder="내용을 입력해주세요."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </p>
        <button
          type="submit"
          className={styles.submitBtn}
          onClick={handleSendMessage}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default SendMessageModal;
