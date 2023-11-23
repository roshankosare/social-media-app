import { UserProfileAcitons } from '@/lib/userProfile';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  const userId = params.userId;
  const data = await UserProfileAcitons.getUserProfile(userId);
  if (data) return NextResponse.json(data, { status: 200 });

  return NextResponse.json({ message: 'invlaid userId' }, { status: 400 });
};
