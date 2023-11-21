import BottomBar from '@/components/nav/BottomBar';
import SideBar from '@/components/nav/SideBar';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex max-h-screen w-full">
        <SideBar />
        <BottomBar />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
