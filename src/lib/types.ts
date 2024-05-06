export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  accessToken: string;
  access_token: string;
  refreshToken: string;
  tags?: string[];
  roadmaps?: string[];
};
