import { authOptionts } from '@/lib/auth/nextAuth';
import { UserProfileAcitons } from '@/lib/userProfile';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  const session = await getServerSession(authOptionts);
  if (!session?.user) {
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
  }
  const userId = params.userId;
  const data = await UserProfileAcitons.getUserProfile(userId);
  if (data) return NextResponse.json(data, { status: 200 });

  return NextResponse.json({ message: 'invlaid userId' }, { status: 400 });
};
