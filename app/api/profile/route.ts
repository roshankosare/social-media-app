import { authOptionts } from '@/lib/auth/nextAuth';
import { UserProfileAcitons } from '@/lib/userProfile';
import { type UserProfile } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const session = await getServerSession(authOptionts);
  if (!session)
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });
  const data = await UserProfileAcitons.getUserProfile(session.user.id);
  if (data) return NextResponse.json(data, { status: 200 });

  return NextResponse.json({ message: 'invlaid userId' }, { status: 400 });
};
export const PATCH = async (req: Request) => {
  const body = await req.json();
  const form = await req.formData();
  const session = await getServerSession(authOptionts);
  if (!session?.user)
    return NextResponse.json({ message: 'forbidden' }, { status: 403 });

  const { username, about } = body;
  const profileImage = form.get('profileImage');

  const updateBody: Partial<
    Pick<UserProfile, 'about' | 'username' | 'avatar'>
  > = {};

  if (username) updateBody.username = username;
  if (about) updateBody.about = about;
  if (profileImage) {
    //upload image to fileHosting then save url in profileImageUrl
    updateBody.avatar = '/avatar.png'; // replace this value with url of image profile
  }
  const data = await UserProfileAcitons.updateUserProfile(
    session.user.id,
    updateBody
  );
  if (data) return NextResponse.json(data, { status: 2000 });
  return NextResponse.json({ message: 'invalid userId' }, { status: 400 });
};
