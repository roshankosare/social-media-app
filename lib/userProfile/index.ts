import { UserProfileModel } from '@/types/models/UserProfile';
import { db } from '../database';
import { Prisma, type UserProfile } from '@prisma/client';
import { UserModel } from '@/types/models/UserModel';

export class UserProfileAcitons {
  static async getUserProfile(
    userId: string
  ): Promise<UserProfileModel | null> {
    const data = await db.userProfile.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        followers: true,
        following: true,
        about: true,
        avatar: true,
      },
    });

    if (!data) return null;

    const userProfile: UserProfileModel = {
      id: data.id,
      username: data.username,
      email: data.email,
      about: data.about,
      avatar: data.avatar,
      followers: data.followers.length,
      following: data.following.length,
    };
    return userProfile;
  }

  static async getUserProfiles({
    take,
    skip,
    whereInputArgs,
  }: {
    take: number;
    skip: number;
    whereInputArgs: Prisma.UserProfileWhereInput;
  }): Promise<UserModel[]> {
    const data = await db.userProfile.findMany({
      take: take,
      skip: skip,
      where: {
        ...whereInputArgs,
      },
      select: {
        username: true,
        id: true,
        avatar: true,
        email: true,
      },
    });

    const users: UserModel[] = data;

    return users;
  }

  static async updateUserProfile(
    userId: string,
    userProfileData: Partial<UserProfile>
  ): Promise<UserProfileModel | null> {
    const user = await db.userProfile.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) return null;

    const updatedUser = await db.userProfile.update({
      where: {
        id: user.id,
      },
      data: {
        ...userProfileData,
      },
    });

    if (!userProfileData) return null;

    const userData = await this.getUserProfile(updatedUser.id);

    return userData;
  }
}
