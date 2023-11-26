import { PostModel } from '@/types/models/Post';
import { db } from '../database';
import { Prisma } from '@prisma/client';

export class PostActions {
  static async getPosts({
    postFindManyArgs,
  }: {
    postFindManyArgs: Prisma.PostFindManyArgs;
  }): Promise<PostModel[]> {
    try {
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
      const posts: PostModel[] = data.map((data) => {
        const post: PostModel = {
          id: data.id,
          userId: data.userProfileId,
          likeCount: data.likedBy.length,
          commentsCount: data.comments.length,
          imageUrl: data.imageUrl,
          user: {
            id: data.userProfile.id,
            username: data.userProfile.username,
            email: data.userProfile.email,
            avatar: data.userProfile.avatar,
          },
        };
        return post;
      });
      return posts;
    } catch (error) {
      throw new Error('internal server error');
    }
  }

  static async createPost(
    userId: string,
    { imageUrl, caption }: { imageUrl: string; caption: string }
  ): Promise<Partial<PostModel> | null> {
    try {
      const user = await db.userProfile.findUnique({
        where: {
          id: userId,
        },
      });
      if (!user) return null;
      const data = await db.post.create({
        data: {
          imageUrl: imageUrl,
          caption: caption,
          userProfile: {
            connect: {
              id: userId,
            },
          },
        },
      });
      if (!data) return null;

      const post: Partial<PostModel> = {
        userId: data.userProfileId,
        imageUrl: data.imageUrl,
        id: data.id,
      };
      return post;
    } catch (error) {
      throw new Error('internal server error');
    }
  }
}
