export type UserProfileModel = {
  id: string;
  username: string;
  email: string;
  about: string | null;
  followers: number;
  following: number;
  avatar: string;
};
