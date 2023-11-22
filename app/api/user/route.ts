import { UserProfileAcitons } from '@/lib/userProfile';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  const page = parseInt(searchParams.get('page') || '0');

  const findUsers: Prisma.UserProfileWhereInput = {};

  if (username) findUsers.username = username;

  const data = await UserProfileAcitons.getUserProfiles({
    take: 10,
    skip: +page,
    whereInputArgs: findUsers,
  });

  return NextResponse.json(data, { status: 200 });
};
