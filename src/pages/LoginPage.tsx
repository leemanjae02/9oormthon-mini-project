import { useNavigate } from "react-router-dom";
import { useInput } from "../hook/UseInput";
import {
  getKaKaoLoginURL,
  getGoogleLoginURL,
  getNaverLoginURL,
  login,
} from "../service/UserService";
import styles from "../styles/LoginPage.module.less";
import { v4 as uuidv4 } from "uuid";
const LoginPage = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
  const STATE = uuidv4();
  const navigate = useNavigate();

  const socialNaverLogin = () => {
    window.localStorage.setItem("provider", "naver");
    window.location.href = getNaverLoginURL(STATE);
  };
  const socialKaKaoLogin = () => {
    window.localStorage.setItem("provider", "kakao");
    window.location.href = getKaKaoLoginURL();
  };

  const socialGoogleLogin = () => {
    window.localStorage.setItem("provider", "google");
    window.location.href = getGoogleLoginURL();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(id, password);
      if (response.success) {
        navigate("/");
      }
    } catch (error) {
      console.log("로그인 실패", error);
    }
  };
  return (
    <div className={styles.container}>
      <h1></h1>

      <div className={styles.input}>
        <input
          type="text"
          className={styles.id}
          placeholder="아이디"
          value={id}
          onChange={onChangeId}
        />
        <input
          type="password"
          className={styles.password}
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button className={styles.loginbtn} onClick={handleLogin}>
        에브리타임 로그인
      </button>

      <div className={styles.socialBox}>
        <hr className={styles.socialLine}></hr>
        <span>간편로그인</span>
        <div className={styles.socialItem}>
          <div className={styles.kakao} onClick={socialKaKaoLogin}>
            <img src="/img/kakao.png" />
          </div>
          <div className={styles.google} onClick={socialGoogleLogin}>
            <img src="/img/google.png" />
          </div>
          <div className={styles.naver} onClick={socialNaverLogin}>
            <img src="/img/naver.png" />
          </div>
        </div>
        <button className={styles.signup}>
          <a href="/signup">회원가입</a>
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
