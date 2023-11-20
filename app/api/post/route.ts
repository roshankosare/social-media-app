import { PostActions } from '@/lib/posts';
import { Prisma } from '@prisma/client';
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

// export const POST = async (req:Request) => {
//     // const body = await req.formData();
//     // const image = body.getAll("images");
//     // const caption = body.get('caption');

//     //TODO:- upload images on file server;

// }
