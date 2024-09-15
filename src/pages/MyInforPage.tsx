import DefaultContainer from "../components/DefaultContainer";
import { deleteUser, logout } from "../service/UserService";
import styles from "../styles/MyInforPage.module.less";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfile } from "../service/UserService";
const MyInforPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<userProfile | null>(null);

  const hanldeUserAction = async (actionType: string) => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      console.log("로그인 상태가 아닙니다.");
      return;
    }
    try {
      let response;
      if (actionType === "logout") {
        response = await logout(token);
      } else if (actionType === "deleteUser") {
        response = await deleteUser(token);
      }
      if (response) {
        window.localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.log(
          `${actionType === "logout" ? "로그아웃" : "회원탈퇴"} 실패`,
          response
        );
      }
    } catch (error) {
      console.log(
        `${actionType === "logout" ? "로그아웃" : "회원탈퇴"} 중 오류 발생`,
        error
      );
    }
  };

  const handleLogout = () => hanldeUserAction("logout");
  const handleDleteUser = () => hanldeUserAction("deleteUser");
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
    <div className={styles.container}>
      <DefaultContainer />
      <section className={styles.userprofil}>
        <div className={styles.title}>
          <h1>내 정보</h1>
          <button className={styles.logoutbtn} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
        <div className={styles.profil}>
          <img src="/img/profil.png" />
          <h3>
            {profile?.name}
            <span>&nbsp;/&nbsp;</span>
            {profile?.nickName}
          </h3>

          <p>
            <span>
              {profile?.universityName}
              &nbsp;
              {profile?.year}학번
            </span>
            <span></span>
          </p>
        </div>
      </section>
      <section className={styles.account}>
        <h2>계정</h2>
        <p className={styles.item}>
          <span>아이디</span>
          <span className={styles.content}>{profile?.id}</span>
        </p>
        <p className={styles.item}>
          <button className={styles.deleteuser} onClick={handleDleteUser}>
            회원탈퇴
          </button>
        </p>
      </section>
      <section className={styles.activity}>
        <h2>내 활동</h2>
        <p className={styles.item}>
          <a href="/myarticle">내가 쓴 글</a>
        </p>
        <p className={styles.item}>
          <a href="/mycomment">내가 쓴 댓글</a>
        </p>
        <p className={styles.item}>
          <a href="/myscrap">내 스크랩</a>
        </p>
      </section>
    </div>
  );
};
export default MyInforPage;
