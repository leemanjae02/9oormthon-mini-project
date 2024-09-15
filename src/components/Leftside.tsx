import { useNavigate } from "react-router-dom";
import { getProfile, logout } from "../service/UserService";
import styles from "../styles/Leftside.module.less";
import { useEffect, useState } from "react";

const Leftside = () => {
  const [profile, setProfile] = useState<userProfile | null>(null);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const token = window.localStorage.getItem("token");
    console.log("로그아웃 클릭");
    if (token) {
      try {
        const response = await logout(token);
        if (response) {
          navigate("/login");
          console.log("로그아웃 성공");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const getUserProfile = async () => {
      try {
        if (token) {
          const response = await getProfile(token);
          if (response) {
            setProfile(response[0]); // json서버 테스트를 위히 배열로 처리함
            // setProfile({
            //   id: response.id,
            //   name: response.name,
            //   nickName: response.nickName,
            //   year: response.year,
            //   universityName: response.universityName,
            // });
            console.log(response);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, []);
  return (
    <div className={styles.leftside}>
      <div className={styles.profil}>
        <div className={styles.infor}>
          <img src="/public/img/profil.png" />
          <p className={styles.nickname}>{profile?.nickName}</p>
          <p className={styles.school}>{profile?.name}</p>
          <p className={styles.school}>{profile?.id}</p>
          <ul className={styles.btnBox}>
            <li>
              <a href="/my">내 정보</a>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.logoutbtn}>
                로그아웃
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <a href="/myarticle" className={styles.myarticle}>
            내가 쓴 글
          </a>
          <a href="/mycomment" className={styles.mycommentarticle}>
            댓글 단 글
          </a>
          <a href="/myscrap" className={styles.myscrap}>
            내 스크랩
          </a>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
