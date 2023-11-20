import { User } from './User';

export type PostModel = {
  id: string;
  userId: string;
  user: User;
  imageUrl: string;
  likeCount: number;
  commentsCount: number;
};
