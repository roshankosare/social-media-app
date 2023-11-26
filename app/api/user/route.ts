import { UserProfileAcitons } from '@/lib/userProfile';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  const page = +(searchParams.get('page') || 1);

  const findUsers: Prisma.UserProfileWhereInput = {};

  if (username)
    findUsers.username = {
      contains: username,
    };
  const take = 10;
  const skip = page === 0 ? 0 : (page - 1) * take;
  const data = await UserProfileAcitons.getUserProfiles({
    take: take,
    skip: skip,
    whereInputArgs: findUsers,
  });

  return NextResponse.json(data, { status: 200 });
};
