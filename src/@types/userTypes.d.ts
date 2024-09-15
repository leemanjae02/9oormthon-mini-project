interface JoinData {
  year: number;
  universityName: string;
  name: string;
  nickName: string;
  email: string;
  id: string;
  password: string;
  checkPassword: string;
}

interface userProfile {
  id: string;
  name: string;
  nickName: string;
  year?: number;
  universityName?: string;
}
