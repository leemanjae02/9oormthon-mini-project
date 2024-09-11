import { useInput } from "../hook/UseInput";
import { upLoadFiles } from "../service/BoardService";
import styles from "../styles/Write.module.less";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface WriteProps {
  setWrite: (write: boolean) => void;
}

const Write: React.FC<WriteProps> = ({ setWrite }) => {
  const { boardId } = useParams<{ boardId: string }>();
  const [anonym, setAnonym] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [title, onChangeTitle] = useInput();
  const [content, setContent] = useState<string>("");

  const handleAnonym = () => {
    setAnonym(!anonym);
  };

  const handleSelectedFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);

    if (files) {
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFilePreviews(previews);
      Array.from(files).forEach((file) => {
        console.log("파일 이름:", file.name);
        console.log("파일 크기:", file.size);
        console.log("파일 타입:", file.type);
      });
    }
  };

  useEffect(() => {
    return () => {
      filePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [filePreviews]);

  const handleFileUpLoad = async () => {
    if (boardId)
      try {
        const response = await upLoadFiles(
          boardId,
          title,
          content,
          anonym,
          selectedFiles || undefined
        );
        if (response.success) {
          alert("게시물 등록에 성공했습니다.");
        } else {
          alert("게시물 등록에 실패했습니다.");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setWrite(false);
      }
  };

  return (
    <form className={styles.articlewrite}>
      <p className={styles.inputtitle}>
        <input
          type="title"
          autoComplete="off"
          placeholder="글 제목"
          value={title}
          onChange={onChangeTitle}
        />
      </p>
      <p className={styles.textbox}>
        <textarea
          name="text"
          placeholder="내용을 작성해주세요."
          className={styles.text}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </p>
      <input
        type="file"
        multiple
        id="file-upload"
        onChange={handleSelectedFiles}
      />
      {selectedFiles && (
        <ol className={styles.preview}>
          {Array.from(selectedFiles).map((file, index) => {
            const preview = URL.createObjectURL(file);
            return (
              <li
                className={styles.loadfile}
                key={file.name + file.lastModified}
              >
                <img
                  src={preview}
                  alt={`preview-${index}`}
                  className={styles.previewimage}
                />
              </li>
            );
          })}
          <label htmlFor="file-upload">
            <li className={styles.newfile}></li>
          </label>
        </ol>
      )}
      <div className={styles.clear}></div>
      <ul className={styles.option}>
        <li className={styles.hashtag}></li>
        <label htmlFor="file-upload">
          <li className={styles.attach}> </li>
        </label>

        <li className={styles.submit} onClick={handleFileUpLoad}></li>
        <li
          className={anonym ? styles.anonymactive : styles.anonym}
          onClick={handleAnonym}
        ></li>
      </ul>
      <div className={styles.clear}></div>
    </form>
  );
};
export default Write;
