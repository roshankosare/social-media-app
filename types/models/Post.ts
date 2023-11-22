import { UserModel } from './UserModel';

export type PostModel = {
  id: string;
  userId: string;
  user: UserModel;
  imageUrl: string;
  likeCount: number;
  commentsCount: number;
};
