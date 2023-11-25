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
      <Link href={'/app'}>
        <UtilityIcons.HomeIcon size={28} />
      </Link>
      <Link href={'/app/explore'}>
        <UtilityIcons.ExploreIcon size={28} />
      </Link>
      <Link href={'/app/create-post'}>
        <UtilityIcons.CreateIocn size={28} />
      </Link>
      <Link href={'/app/search'}>
        <UtilityIcons.SerachIcon size={28} />
      </Link>
      <Link href={'/app/messages'}>
        <UtilityIcons.MessageIcon size={28} />
      </Link>
      <Link href={'/app/profile'}>
        <div className="h-[28px] w-[28px]">
          <Avatar url={session.data?.user.image || '/avatar.png'} />
        </div>
      </Link>
    </Card>
  );
};

export default BottomBar;
