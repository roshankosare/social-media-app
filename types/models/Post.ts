import { User } from './User';

export type Post = {
  id: string;
  userId: string;
  user: User;
  imageUrl: string;
  likeCount: number;
  commentsCount: number;
};
