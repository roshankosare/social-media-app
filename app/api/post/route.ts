import { authOptionts } from '@/lib/auth/nextAuth';
import { PostActions } from '@/lib/posts';
import { Prisma } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const body = await req.json();
  const { take, skip, userId } = body;
  const findPostsArgs: Prisma.PostFindManyArgs = {};
  findPostsArgs.take = take || 5;
  findPostsArgs.skip = skip || 0;
  if (userId)
    findPostsArgs.where = {
      userProfileId: userId,
    };

  const posts = await PostActions.getPosts({ postFindManyArgs: findPostsArgs });
  return NextResponse.json(posts, { status: 200 });
};

export const POST = async (req: Request) => {
  const session = await getServerSession(authOptionts);
  if (!session?.user)
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
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
};
