'use client';

import Logo from '@/components/nav/Logo';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'loading') return;
    if (session.status === 'authenticated') {
      setTimeout(() => {
        router.push('/app');
      }, 2000);

      return;
    }

    setTimeout(() => {
      console.log('this runs');
      router.push('/sign-in');
    }, 2000);
  }, [session, router]);

  return (
    <div className="h-full w-full">
      <div className=" fixed left-2/4 top-2/4 h-auto  w-auto -translate-x-1/2  -translate-y-1/2">
        <div className="mx-auto h-auto w-96 animate-pulse px-8 py-5  ">
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
}
