'use client';
import Link from 'next/link';
import { Card } from '../ui/card';
import { UtilityIcons } from '../icons/utitlityIcons';
import Avatar from '../ui/avatar';
import { useSession } from 'next-auth/react';

interface BottomBarProps {}

const BottomBar: React.FC<BottomBarProps> = ({}) => {
  const session = useSession();
  return (
    <Card className="fixed bottom-0 flex h-12 w-full justify-between px-5 py-2 sm:hidden">
      <Link href={'/home'}>
        <UtilityIcons.HomeIcon size={28} />
      </Link>
      <Link href={'/explore'}>
        <UtilityIcons.ExploreIcon size={28} />
      </Link>
      <Link href={'/create'}>
        <UtilityIcons.CreateIocn size={28} />
      </Link>
      <Link href={'/search'}>
        <UtilityIcons.SerachIcon size={28} />
      </Link>
      <Link href={'/messages'}>
        <UtilityIcons.MessageIcon size={28} />
      </Link>
      <Link href={'/profile'}>
        <div className="h-[28px] w-[28px]">
          <Avatar url={session.data?.user.image || '/avatar.png'} />
        </div>
      </Link>
    </Card>
  );
};

export default BottomBar;
