import CustomAxios from "../api/CustomAxios";

export const getKaKaoLoginURL = () => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_OAUTH_REDIRECT_URI}&response_type=code`;
};

export const getGoogleLoginURL = () => {
  return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_GOOGLE_CLIENT_ID
  }&redirect_uri=${
    import.meta.env.VITE_OAUTH_REDIRECT_URI
  }&response_type=code&scope=email profile`;
};

export const getNaverLoginURL = (STATE: string) => {
  return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_NAVER_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_OAUTH_REDIRECT_URI}&state=${STATE}`;
};

export const getToken = async (authCode: string, provider: string) => {
  try {
    const response = await CustomAxios.post(
      `/${provider}/token?code=${authCode}`
    );
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        const { token, userName } = data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userName", userName);
        return { success: true, userName };
      }
    }

    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const login = async (id: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("password", password);
    const response = await CustomAxios.post("/user/login", formData);
    if (response.status === 200) {
      const { success, data } = response.data;
      if (success) {
        const { token, userName } = data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userName", userName);
        return { success: true, userName };
      }
    }

    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const join = async (data: JoinData) => {
  try {
    const response = await CustomAxios.post("/user/join", {
      data,
    });
    return response.data; // 서버응답(에러문구이거나 성공문구)
  } catch (error) {
    console.log(error);
  }
};
