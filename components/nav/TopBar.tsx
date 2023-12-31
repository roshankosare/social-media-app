'use client';
import React from 'react';
import { NavBarIcon } from '@/components/icons';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/button';
import { UtilityIcons } from '../icons/utitlityIcons';
import AlertDialogCustom from '../utitlity/AlertDialogCusotm';
import { signOut } from 'next-auth/react';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="flex h-[40px] w-full  flex-row justify-between px-2">
      <div className=" flex h-full w-full flex-row gap-x-2">
        <div className=" my-auto h-[28px] w-[28px] rounded-full border-[2px] border-black dark:border-white">
          <NavBarIcon.Logo />
        </div>
        <div className="my-auto h-[20px]    w-auto">
          <NavBarIcon.NameIcon />
        </div>
      </div>

      <div className="my-auto flex flex-row gap-x-4">
        <ThemeToggle />
        <AlertDialogCustom
          title="Log Out"
          description="Are you sure want to log out"
          nextAction={() => signOut()}
        >
          <Button
            variant={'outline'}
            size={'icon'}
            className="block border-none px-0 py-0 sm:hidden"
          >
            <UtilityIcons.logOut className="mx-auto my-auto" size={20} />
          </Button>
        </AlertDialogCustom>
      </div>
    </div>
  );
};
export default TopBar;
