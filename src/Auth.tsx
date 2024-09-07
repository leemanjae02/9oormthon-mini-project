import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "./service/UserService";

const AuthPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const code = new URLSearchParams(window.location.search).get("code");
        const provider = window.localStorage.getItem("provider");

        if (code && provider) {
          const success = await getToken(code, provider);
          if (success) {
            navigate("/");
          }
        }
      } catch (error) {
        console.log("로그인 실패", error);
      }
    };
    authenticateUser();
  }, [navigate]);

  return <div></div>;
};

export default AuthPage;
