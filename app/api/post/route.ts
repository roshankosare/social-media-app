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
  findPostsArgs.skip = (page - 1) * take;
  findPostsArgs.where = {
    userProfileId: {
      not: user.id,
    },
    userProfile: {
      followers: {
        some: {
          id: user.id,
        },
      },
    },
  };
  findPostsArgs.orderBy = {
    createdAt: 'desc',
  };

  const posts = await PostActions.getPosts({ postFindManyArgs: findPostsArgs });
  if (posts.length < 5) {
    findPostsArgs.where = {
      userProfileId: {
        not: user.id,
      },
    };
    const suggestedPosts = await PostActions.getPosts({
      postFindManyArgs: findPostsArgs,
    });
    return NextResponse.json([...posts, ...suggestedPosts], { status: 200 });
  }

  return NextResponse.json(posts, { status: 200 });
};

export const POST = async (req: Request) => {
  const session = await getServerSession(authOptionts);
  if (!session?.user)
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
  try {
    const body = await req.formData();
    const image = body.get('image') as unknown as File;
    const caption = body.get('caption') as unknown as string;

    if (!image)
      return NextResponse.json(
        { message: 'image not inlcuded' },
        { status: 400 }
      );
    // TODO:- upload images on file server;
    const imageUrl = '/samplePostImage.jpg';

    const data = await PostActions.createPost(session.user.id, {
      imageUrl: imageUrl,
      caption: caption || '',
    });

    if (data) return NextResponse.json(data, { status: 200 });

    return NextResponse.json({ message: 'invlaid user Id' }, { status: 403 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 403 }
    );
  }
};
