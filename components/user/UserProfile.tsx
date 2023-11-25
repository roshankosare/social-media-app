import React from 'react';
import { UserProfileModel } from '@/types/models/UserProfile';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
interface UserProfileProps {
  userProfile: UserProfileModel;
  myProfile: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({
  userProfile,
  myProfile,
}) => {
  return (
    <div className="flex w-full flex-col ">
      <div className="flex flex-row justify-start gap-x-5 sm:gap-x-12">
        <div className="first-line: h-[80px] w-[80px] px-2  py-2 sm:h-[180px] sm:w-[180px] sm:px-5 sm:py-5">
          <Image
            src={userProfile.avatar}
            width={500}
            height={500}
            alt="dp"
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-8 px-2 py-2">
          <div className="flex flex-row gap-x-5">
            <p className="my-auto  text-lg sm:text-xl">
              {userProfile.username}
            </p>
            {myProfile && (
              <Link
                href={'/app/edit-profile'}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' }),
                  'rounded-full px-5 py-0'
                )}
              >
                Edit Profile
              </Link>
            )}
          </div>
          <div className=" hidden flex-row gap-x-4 sm:flex ">
            <p className="font-bold">{0 + ' '}</p>posts
            <p className="font-bold">{userProfile.followers + ' '}</p>followers
            <p className="font-bold">{userProfile.following + ' '}</p>followings
          </div>

          <p>{userProfile.about}</p>
        </div>
      </div>

      <div className="flex justify-between px-5 py-2 sm:hidden">
        <div className="flex flex-col gap-y-2">
          <p className="mx-auto"> posts</p>
          <p className="mx-auto"> 10</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="mx-auto"> followers</p>
          <p className="mx-auto"> {userProfile.followers}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="mx-auto"> following</p>
          <p className="mx-auto"> {userProfile.following}</p>
        </div>
      </div>
    </div>
  );
};

export const UserProfileSkeleton = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-row justify-start gap-x-2">
        <div className="h-[80px] w-[80px] px-2 py-2 sm:h-[180px] sm:w-[180px]">
          <Skeleton className="h-full w-full rounded-full" />
        </div>
        <div className="flex  w-[280px] flex-col gap-y-8 px-2 py-2 sm:w-[500px]">
          <Skeleton className="my-auto h-6 w-40 rounded-sm" />
          <div className=" hidden flex-row gap-x-4 sm:flex">
            <Skeleton className="h-6 w-28 rounded-sm" />
            <Skeleton className="h-6 w-28 rounded-sm" />
            <Skeleton className="h-6 w-28 rounded-sm" />
          </div>

          <div className=" hidden flex-col gap-y-4 sm:flex">
            <Skeleton className=" h-4 w-[240px] rounded-sm " />
            <Skeleton className=" h-4 w-[180px] rounded-sm " />
            <Skeleton className=" h-4 w-[280px] rounded-sm " />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-4 sm:hidden">
        <Skeleton className=" h-4 w-[240px] rounded-sm " />
        <Skeleton className=" h-4 w-[180px] rounded-sm " />
        <Skeleton className=" h-4 w-[280px] rounded-sm " />
      </div>
      <div className="flex justify-between py-5 sm:hidden">
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
};

export default UserProfile;
