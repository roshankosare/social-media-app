import { UserModel } from '@/types/models/UserModel';
import { Card } from '../ui/card';
import Avatar from '../ui/avatar';

interface SuggestedUsersProps {
  users: UserModel[];
}

const SuggestedUsers: React.FC<SuggestedUsersProps> = ({ users }) => {
  return (
    <Card className="hidden w-full flex-col gap-y-5 border-none px-5 py-5 sm:flex">
      <div className=" my-5 flex flex-row justify-between">
        <p className="text-xs text-gray-600 dark:text-gray-300 ">
          Suggested for you
        </p>
        <p className="text-xs font-bold">See All</p>
      </div>
      {users.map((user) => (
        <div key={user.email} className="flex flex-row justify-between px-5">
          <div className="flex flex-row gap-x-4">
            <div className="h-[35h] w-[35px]">
              <Avatar url={user.avatar} />
            </div>
            <p className="my-auto text-xs font-bold">{user.username}</p>
          </div>
          <p className="my-auto text-xs font-bold text-blue-500">follow</p>
        </div>
      ))}
    </Card>
  );
};

export default SuggestedUsers;
