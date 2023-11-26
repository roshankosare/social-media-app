import { authOptionts } from '@/lib/auth/nextAuth';
import { PostActions } from '@/lib/posts';
import { UserProfileAcitons } from '@/lib/userProfile';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptionts);

  if (!session?.user) {
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
  }

  const user = await UserProfileAcitons.getUserProfile(session.user.id);
  if (!user) {
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
  }
  const { searchParams } = new URL(req.url);
  const page = +(searchParams.get('page') || 1);
  const findPostsArgs: Prisma.PostFindManyArgs = {};
  const take = 10;
  findPostsArgs.take = take;
  findPostsArgs.skip = page === 0 ? 0 : (page - 1) * take;
  findPostsArgs.where = {
    userProfileId: {
      not: user.id,
    },
  };
  findPostsArgs.orderBy = {
    createdAt: 'desc',
  };

  const posts = await PostActions.getPosts({ postFindManyArgs: findPostsArgs });

  return NextResponse.json([...posts], { status: 200 });
};
