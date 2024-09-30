import CustomAxios from "../api/CustomAxios";

export const getMiniNoticeBoard = async () => {
  try {
    const response = await CustomAxios.get("http://localhost:3001/boards");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBoard = async (boardId: string, page: number) => {
  try {
    if (boardId) {
      const response = await CustomAxios.get(
        `http://localhost:3002/boards/${boardId}`,
        {
          params: {
            page: page,
          },
        }
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPost = async (boardId: number, postId: number) => {
  try {
    const response = await CustomAxios.get(
      `http://localhost:3003/posts?boardId=${boardId}&postId=${postId}`
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyComment = async () => {
  try {
    const response = await CustomAxios.get("http://localhost:3003/boards"); // 내가 쓴 댓글 조회
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMyArticle = async () => {
  try {
    const response = await CustomAxios.get("http://localhost:3003/myArticle"); // 내가 쓴 글 조회
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getMyScrap = async () => {
  try {
    const response = await CustomAxios.get("http://localhost:3003/myScrap"); // 내 스크랩 조회
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const upLoadFiles = async (
  boardId: string,
  title: string,
  content: string,
  anonym: boolean,
  files?: FileList
) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("anonym", anonym.toString());
  if (files) {
    Array.from(files).forEach((file: File) => {
      formData.append("files", file);
    });
  }

  try {
    const response = await CustomAxios.post(
      `/boards/${boardId}/upload`,
      formData,

      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.status === 200) {
      const success = response.data;
      if (success) {
        console.log("업로드 성공");
        return { success: true };
      }
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const addLike = async (boardId: number, postId: number) => {
  try {
    const response = await CustomAxios.post(
      `/boards/${boardId}/posts/${postId}`
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addScrap = async (boardId: number, postId: number) => {
  try {
    console.log(boardId, postId);
    const response = await CustomAxios.post(`/scrap/${boardId}/${postId}`);
    if (response.status === 200) {
      return response.data.statusCode;
    }
  } catch (error) {
    console.log("스크랩 추가 중 에러 발생", error);
  }
};
