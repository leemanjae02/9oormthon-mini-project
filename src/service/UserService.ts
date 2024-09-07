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
      `${provider}/token?code=${authCode}`
    );
    if (response.status === 200) {
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
