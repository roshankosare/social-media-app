'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import { UtilityIcons } from '../icons/utitlityIcons';
import Avatar from '../ui/avatar';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';
import AlertDialogCustom from '../utitlity/AlertDialogCusotm';

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const session = useSession();
  return (
    <div className="sticky left-0 hidden h-screen w-80 flex-col justify-between gap-y-10 border-r border-gray-300  py-5 dark:border-gray-500 sm:flex">
      <TopBar />
      <div className="flex flex-col gap-y-10 px-5">
        <Link href={'/app'} className="flex flex-row gap-x-5">
          {<UtilityIcons.HomeIcon />}
          <div className="my-auto">Home</div>
        </Link>
        <Link href={'/app/search'} className="flex flex-row gap-x-5">
          {<UtilityIcons.SerachIcon />}
          <div className="my-auto">Search</div>
        </Link>
        <Link href={'/app/messages'} className="flex flex-row gap-x-5">
          {<UtilityIcons.MessageIcon />}
          <div className="my-auto">Messages</div>
        </Link>
        <Link href={'/app/explore'} className="flex flex-row gap-x-5">
          {<UtilityIcons.SerachIcon />}
          <div className="my-auto">Explore</div>
        </Link>
        <Link href={'/app/notification'} className="flex flex-row gap-x-5">
          {<UtilityIcons.NotificationIcon />}
          <div className="my-auto">Notification</div>
        </Link>
        <Link href={'/app/create-post'} className="flex flex-row gap-x-5">
          {<UtilityIcons.CreateIocn />}
          <div className="my-auto">Create</div>
        </Link>
        <Link href={'/app/profile'} className="flex flex-row gap-x-5">
          <div className="h-[28px] w-[28px]">
            {<Avatar url={session.data?.user.image || '/avatar.png'} />}
          </div>
          <div className="my-auto">Profile</div>
        </Link>
      </div>
      <div className="flex flex-col gap-y-5 px-5">
        <AlertDialogCustom
          title="Log Out"
          description="Are you sure want to Log out"
          nextAction={() => signOut()}
        >
          <Button
            variant={'outline'}
            className="flex w-28 flex-row gap-x-2 rounded-full  px-1 "
          >
            Sign out
            <UtilityIcons.logOut size={16} />
          </Button>
        </AlertDialogCustom>
      </div>
    </div>
  );
};
export default SideBar;
