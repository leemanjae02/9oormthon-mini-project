import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // react-router-dom import
import DefaultContainer from "../components/DefaultContainer.tsx";
import styles from "../styles/MessagePage.module.less";
import { getMessageBox } from "../service/MessageService.ts";
import useFormattedDate from "../hook/UseFormattedDate.ts";
import MessageContainer from "../components/MessageContainer.tsx";

const MessagePage = () => {
  const [messageBoxData, setMessageBoxData] = useState<MessageBox[] | null>(
    null
  ); // 쪽지함 상태
  const [selectedMessageId, setSelectedMessageId] = useState<number>(0);

  const handleMessageBox = (id: number) => {
    setSelectedMessageId(id);
  };

  useEffect(() => {
    const getMessageBoxData = async () => {
      try {
        const response = await getMessageBox();
        if (response) {
          setMessageBoxData(response.data);
        }
      } catch (error) {
        console.log("쪽지함 불러오는 도중 에러 발생", error);
      }
    };
    getMessageBoxData();
  }, []);

  const formatDate = useFormattedDate();

  return (
    <div className={styles.container}>
      <DefaultContainer />
      <div className={styles.messageBox}>
        <div className={styles.leftBox}>
          <h2>쪽지함</h2>

          <div className={styles.items}>
            {messageBoxData?.map((messageBox) => (
              <Link
                to={`/message/${messageBox.messageBoxId}`}
                className={`${styles.item} ${
                  messageBox.messageBoxId === selectedMessageId
                    ? styles.itemActive
                    : ""
                }`}
                key={messageBox.messageBoxId}
                onClick={() => handleMessageBox(messageBox.messageBoxId)}
              >
                <time className={styles.time}>
                  {formatDate(messageBox.timeStamp)}
                </time>
                <h3>{messageBox.author}</h3>
                <p className={styles.text}>{messageBox.lastMessage}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rightBox}>
          <MessageContainer messageBoxId={selectedMessageId} />
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
