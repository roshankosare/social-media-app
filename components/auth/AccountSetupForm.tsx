'use client';

import Logo from '@/components/nav/Logo';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useAccountSetup from '@/hooks/useAccountSetup';
import { cn } from '@/lib/utils';

import Image from 'next/image';

import { Skeleton } from '../ui/skeleton';
interface AccountSetupFormProps {
  userId: string;
}

const AccountSetupForm: React.FC<AccountSetupFormProps> = ({ userId }) => {
  const {
    about,
    setProfileImage,
    setAbout,
    profileImage,
    handleNext,
    user,
    handleSkip,
    loading,
  } = useAccountSetup({ userId: userId });
  return (
    <>
      {!loading ? (
        <Card className=" my-10 flex w-full flex-col gap-y-8 border-none px-8 py-5 shadow-none sm:border-solid sm:px-10 ">
          <Logo />
          <p className="mx-auto font-bold">Account Setup</p>

          <div className="flex flex-col gap-y-5">
            <div className="flex- flex-col gap-y-2">
              <div className=" mx-auto h-[140px] w-[140px]">
                <Image
                  src={
                    profileImage
                      ? URL.createObjectURL(profileImage)
                      : user?.avatar || '/avatar.png'
                  }
                  width={500}
                  height={500}
                  alt="profile"
                  className="rounded-full"
                />
              </div>
              <p className="py-2 text-center text-sm font-bold">
                {user?.username}
              </p>
            </div>

            <div className="flex flex-col gap-x-4 gap-y-4 sm:flex-row">
              <Label className="my-auto">Upload Profile pic</Label>
              <label
                htmlFor="fileInput"
                className={cn(buttonVariants({ size: 'sm' }), 'w-28')}
              >
                Open
              </label>
              <Input
                id={'fileInput'}
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files) setProfileImage(e.target.files[0]);
                }}
              />
            </div>
            <div className="flex- flex-col gap-y-2">
              <Label>About</Label>
              <Textarea
                rows={5}
                className="w-full"
                value={about || ''}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <Button size={'sm'} className="w-28" onClick={() => handleNext()}>
                Next
              </Button>
              <Button
                size={'sm'}
                variant={'outline'}
                className="w-28"
                onClick={() => {
                  handleSkip();
                }}
              >
                Skip
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <AccountSetupFormSkeleton />
      )}
    </>
  );
};

const AccountSetupFormSkeleton = () => {
  return (
    <Card className=" my-10 flex w-full flex-col gap-y-8 border-none px-8 py-5 shadow-none sm:border-solid sm:px-10 ">
      <Logo />
      <div className="flex flex-col gap-y-5">
        <p className="mx-auto font-bold">Account Setup</p>
        <div className="flex flex-col gap-y-2">
          <div className=" mx-auto h-[140px] w-[140px]">
            <Skeleton className="h-full w-full rounded-full" />
          </div>
          <Skeleton className="mx-auto h-6 w-20 rounded-sm" />
        </div>
        <div className="flex flex-col gap-x-4 gap-y-4 sm:flex-row">
          <Skeleton className="my-auto h-6 w-28 rounded-sm" />
          <Skeleton className="h-10 w-16 rounded-md" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-6 w-16 rounded-sm" />
          <Skeleton className="h-28 w-full rounded-sm" />
        </div>
        <div className="flex flex-row justify-between">
          <Skeleton className="h-12 w-20 rounded-md" />
          <Skeleton className="h-12 w-20 rounded-md" />
        </div>
      </div>
    </Card>
  );
};

export default AccountSetupForm;
