// import { useState } from "react";
import SignUpComponent from "../components/SignUpComponent";
import { useInput } from "../hook/UseInput";
import styles from "../styles/SignUpPage.module.less";
import { useState } from "react";
import { join } from "../service/UserService";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState<number>(0);
  const [universityName, onChangeUniversityName] = useInput();
  const [name, onChangeName] = useInput();
  const [nickName, onChangeNickName] = useInput();
  const [email, onChangeEmail] = useInput();
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const [checkPassword, onChangeCheckPassword] = useInput();
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleJoin = async () => {
    const joinData: JoinData = {
      year,
      universityName,
      name,
      nickName,
      email,
      id,
      password,
      checkPassword,
    };

    const response = await join(joinData);
    if (response === "성공") {
      navigate("/");
    } else {
      setResponseMessage(response);
    }
  };
  console.log(year, typeof year);
  return (
    <div className={styles.container}>
      <section className={styles.signupinfor}>
        <div className={styles.headerinfor}>
          <h2>에브리타임 회원가입</h2>
          <p>
            에브리타임 계정으로 <strong>캠퍼스픽, 에브리타임</strong> 등<br />
            다양한 대학생 서비스를 모두 이용하실 수 있습니다.
          </p>
        </div>
        <div className={styles.inputcontainer}>
          <SignUpComponent
            setYear={setYear}
            onChangeUniversityName={onChangeUniversityName}
          />
          <h2 className={styles.h2text}>회원정보</h2>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>이름</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="text"
                placeholder="이름을 입력하세요."
                value={name}
                onChange={onChangeName}
              />
            </div>
          </div>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>닉네임</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="text"
                placeholder="별명을 입력하세요."
                value={nickName}
                onChange={onChangeNickName}
              />
            </div>
          </div>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>이메일</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="text"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={onChangeEmail}
              />
            </div>
          </div>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>아이디</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="text"
                placeholder="아이디를 입력하세요."
                value={id}
                onChange={onChangeId}
              />
            </div>
          </div>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>비밀번호</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </div>
          <div className={styles.inputbox}>
            <div className={styles.label}>
              <label>비밀번호 확인</label>
            </div>
            <div className={styles.inputtext}>
              <input
                type="password"
                placeholder="비밀번호를 다시 입력하세요."
                value={checkPassword}
                onChange={onChangeCheckPassword}
              />
            </div>
          </div>
          <p className={styles.messagebox}>{responseMessage}</p>
        </div>

        <button className={styles.nextbtn} onClick={handleJoin}>
          회원가입
        </button>
      </section>
    </div>
  );
};

export default SignUpPage;
