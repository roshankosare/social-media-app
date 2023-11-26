'use client';
import { UtilityIcons } from '@/components/icons/utitlityIcons';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import UserInfo, { UserInfoSkeleton } from '@/components/user/UserInfo';
import { useSearchUser } from '@/hooks/useSearchUser';
import Image from 'next/image';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = ({}) => {
  const { username, users, loading, setUsername } = useSearchUser();
  return (
    <div className="mx-auto flex h-screen max-h-screen w-full flex-col overflow-y-clip sm:max-w-3xl">
      <div className="flex-flex-col h-full max-h-full w-full px-4 py-5 ">
        <Card className="flex justify-between px-2 py-1">
          <Input
            placeholder="Search"
            className="w-full border-none px-0 py-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button variant={'outline'} className="border-none px-0 py-0">
            <UtilityIcons.SerachIcon className="" size={20} />
          </Button>
        </Card>
        {username.length < 2 ? (
          <div className="flex h-full w-full justify-center text-center">
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
          </div>
        ) : (
          <div className="no-scrollbar flex h-full max-h-full w-full flex-col gap-y-8 overflow-y-scroll px-2 py-2">
            {loading ? (
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                <UserInfoSkeleton key={id} />
              ))
            ) : users.length > 0 ? (
              users.map((user) => <UserInfo user={user} key={user.id} />)
            ) : (
              <div className="my-auto py-10 text-center">
                <p className="mx-auto">No results found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
