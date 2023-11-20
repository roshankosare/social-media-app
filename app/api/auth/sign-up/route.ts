import { Auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const userbody = await req.json();
  try {
    const user = await Auth.signUp({
      email: userbody.email,
      password: userbody.password,
      username: userbody.username,
    });
    const response: NextResponse = NextResponse.json(
      { user: user.id },
      {
        status: 200,
      }
    );

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message.includes('server'))
        return NextResponse.json(
          { error: error.message },
          {
            status: 500,
          }
        );
      return NextResponse.json(
        { error: error.message },
        {
          status: 400,
        }
      );
    }
  }
}
