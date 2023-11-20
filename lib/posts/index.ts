import { Post } from '@/types/models/Post';
import { db } from '../database';
import { Prisma } from '@prisma/client';

export class PostActions {
  static async getPosts({
    postFindManyArgs,
  }: {
    postFindManyArgs: Prisma.PostFindManyArgs;
  }): Promise<Post[]> {
    const data = await db.post.findMany({
      take: postFindManyArgs.take || 10,
      skip: postFindManyArgs.skip || 0,
      where: {
        ...postFindManyArgs.where,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        userProfileId: true,
        imageUrl: true,
        likedBy: {
          select: {
            id: true,
          },
        },
        comments: {
          select: {
            id: true,
          },
        },

        userProfile: {
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
          },
        },
      },
    });
    const posts: Post[] = data.map((data) => {
      const post: Post = {
        id: data.id,
        userId: data.userProfileId,
        likeCount: data.likedBy.length,
        commentsCount: data.comments.length,
        imageUrl: data.imageUrl,
        user: {
          usrname: data.userProfile.username,
          email: data.userProfile.email,
          avatar: data.userProfile.avatar,
        },
      };
      return post;
    });
    return posts;
  }
}
