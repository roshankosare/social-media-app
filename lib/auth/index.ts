import { compare, hash } from 'bcrypt';

import { db } from '../database';

export class Auth {
  static async signUp({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) {
    try {
      const user = await db.account.findUnique({
        where: {
          email,
        },
      });

      if (user) throw new Error('email is already exists');
      const hashedPassword = await hash(password, 10);

      const created = await db.account.create({
        data: {
          email,
          password: hashedPassword,
          provider: 'CREDENTIALS',
          userProfile: {
            create: {
              email: email,
              username: username,
              avatar: '/avatar.png',
            },
          },
        },
      });

      const userProfile = await db.userProfile.findUnique({
        where: {
          accountId: created.id,
        },
      });
      if (!userProfile) throw new Error('Internal server error');
      return userProfile;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('email')) {
          throw new Error(error.message);
        }
      }
      throw new Error('internal server Error');
    }
  }

  static async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const user = await db.account.findUnique({
        where: {
          email,
        },
      });
      if (!user) throw new Error('email or password is incorrect');

      if (user.password)
        if (!(await compare(password, user.password))) {
          throw new Error('email or password is incorrect');
        }

      const userProfile = await db.userProfile.findUnique({
        where: {
          accountId: user.id,
        },
      });
      if (!userProfile) {
        throw new Error('userProfile not found');
      }

      return userProfile;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        if (error.message.includes('email')) throw new Error(error.message);
      }
      throw new Error('Internal server Error');
    }
  }
  static async createUserProfile({
    email,
    username,
    avatar,
  }: {
    email: string;
    username: string;
    avatar: string;
  }) {
    try {
      const userProfile = await db.userProfile.upsert({
        where: {
          email: email,
        },
        update: {},
        create: {
          email: email,
          username: username,
          avatar: avatar,
        },
      });

      return userProfile;
    } catch (error) {
      console.log(error);
      throw new Error('internal server Error');
    }
  }

  static async getUserProfile({ email }: { email: string }) {
    const user = await db.userProfile.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }
}
