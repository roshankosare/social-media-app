import { authOptionts } from '@/lib/auth/nextAuth';
import { PostActions } from '@/lib/posts';
import { UserProfileAcitons } from '@/lib/userProfile';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptionts);
    if (!session?.user) {
      return NextResponse.json({ message: 'forbidden' }, { status: 403 });
    }

    const userId = params.userId;
    const user = await UserProfileAcitons.getUserProfile(userId);
    if (!user) {
      return NextResponse.json({ message: 'invalid userId' }, { status: 404 });
    }
    const { searchParams } = new URL(req.url);
    const page = +(searchParams.get('page') || 1);
    const findPostsArgs: Prisma.PostFindManyArgs = {};
    const take = 10;
    findPostsArgs.take = take;
    findPostsArgs.skip = (page - 1) * take;

    findPostsArgs.where = {
      userProfileId: user.id,
    };

    const posts = await PostActions.getPosts({
      postFindManyArgs: findPostsArgs,
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
};
