import { UtilityIcons } from '@/components/icons/utitlityIcons';
import Avatar from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import UserInfo, { UserInfoSkeleton } from '@/components/user/UserInfo';
import { UserModel } from '@/types/models/UserModel';
import Image from 'next/image';

interface SearchPageProps {}
const user: UserModel = {
  username: 'roshan_kosare',
  id: 'sdfnl',
  email: 'isjdflk',
  avatar: '/avatar.png',
};
const SearchPage: React.FC<SearchPageProps> = ({}) => {
  return (
    <div className="mx-auto flex h-full w-full flex-col sm:max-w-3xl">
      <div className="w-full px-4 py-5 ">
        <Card className="flex justify-between px-2 py-1">
          <Input
            placeholder="Search"
            className="w-full border-none px-0 py-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
          />
          <Button variant={'outline'} className="border-none px-0 py-0">
            <UtilityIcons.SerachIcon className="" size={20} />
          </Button>
        </Card>
        {/* <div className="flex h-screen w-full justify-center text-center">
          <div className="my-auto flex h-28 w-full justify-center gap-x-4">
            <p className="my-auto text-3xl font-bold">Find Peoples</p>
            <Image
              src={'/people.png'}
              width={200}
              height={200}
              className="my-auto h-[50px] w-[50px] dark:invert"
              alt="people"
            />
          </div>
        </div> */}
        <div className="flex h-auto w-full flex-col gap-y-8 px-2 py-2">
          {[0, 1, 2, 3, 4].map((id) => (
            // <UserInfo user={user} key={id} />
            <UserInfoSkeleton key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
