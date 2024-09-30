import styles from "../styles/MessageContainer.module.less";
import { useState } from "react";
import { getMessage } from "../service/MessageService.ts";
import SendMessageModal from "./SendMessageModal.tsx";
import { useQuery } from "react-query";
import useFormattedDate from "../hook/UseFormattedDate.ts";

interface MessageProps {
  chatRoomId: number;
}

const MessageContainer: React.FC<MessageProps> = ({ chatRoomId }) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const currentUserId = window.localStorage.getItem("userId"); // 현재 사용자 고유 userId

  const {
    data: messageData,
    refetch,
    isLoading,
    isError,
  } = useQuery(["message", chatRoomId], () => getMessage(chatRoomId), {
    enabled: !!chatRoomId,
    staleTime: 300000,
  });

  const handleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalStatus(!modalStatus);
  };

  console.log(messageData?.data[0].receiverId);
  const formatDate = useFormattedDate();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>메시지 불러오기에 실패했습니다.</div>;

  return (
    <div className={styles.msgContainer}>
      {modalStatus && (
        <SendMessageModal
          chatRoomId={chatRoomId}
          setModalStatus={setModalStatus}
          receiverId={messageData?.data[0].receiverId}
        />
      )}
      <div className={styles.title}>
        <h2>익명</h2>
        <a className={styles.messageSend} onClick={handleModal}></a>
        <a
          className={styles.refresh}
          onClick={(e) => {
            e.preventDefault();

            refetch();
          }}
        ></a>
        <a className={styles.more}></a>
      </div>
      <div className={styles.items}>
        {messageData?.data.length ? (
          // 메시지가 있을 경우
          messageData.data
            .slice()
            .reverse()
            .map((msg: Message, index: number) => (
              <div key={index} className={styles.item}>
                <time>{formatDate(msg.timeStamp)}</time>

                {msg.senderId === Number(currentUserId) ? (
                  // 현재 유저가 보낸 메시지
                  <div>
                    <p className={styles.senderType}>보낸쪽지</p>
                    <p className={styles.text}>{msg.senderContent}</p>
                  </div>
                ) : (
                  // 현재 유저가 받은 메시지
                  <div>
                    <p className={styles.receiverType}>받은쪽지</p>
                    <p className={styles.text}>{msg.receiverContent}</p>
                  </div>
                )}
              </div>
            ))
        ) : (
          <div>메시지가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default MessageContainer;
