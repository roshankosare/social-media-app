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

interface AccountSetupProps {
  params: { userId: string };
}

const AccountSetup: React.FC<AccountSetupProps> = ({ params }) => {
  const { profileImage, about, setAbout, setProfileImage, handleNext } =
    useAccountSetup({ userId: params.userId });
  return (
    <Card className=" my-10 flex w-full flex-col gap-y-8 border-none px-8 py-5 shadow-none sm:border-solid sm:px-10 ">
      <Logo />
      <p className="mx-auto font-bold">Account Setup</p>

      <div className="flex flex-col gap-y-5">
        <div className="flex- flex-col gap-y-2">
          <div className=" mx-auto h-[140px] w-[140px]">
            <Image
              src={
                profileImage ? URL.createObjectURL(profileImage) : '/avatar.png'
              }
              width={500}
              height={500}
              alt="profile"
              className="rounded-full"
            />
          </div>
          <p className="py-2 text-center text-sm font-bold">roshan_ksoare</p>
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
          <Button size={'sm'} variant={'outline'} className="w-28">
            Skip
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default AccountSetup;
