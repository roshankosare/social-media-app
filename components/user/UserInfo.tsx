import { UserModel } from '@/types/models/UserModel';
import Avatar from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

interface UserInfoProps {
  user: UserModel;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div className="flex w-full flex-row gap-x-5 px-2">
      <div className="my-auto h-[50px] w-[50px]">
        <Avatar url={user.avatar} />
      </div>
      <p className="my-auto text-xs font-bold">{user.username}</p>
    </div>
  );
};

export const UserInfoSkeleton = () => {
  return (
    <div className="flex w-full flex-row gap-x-5 px-2">
      <div className="my-auto h-[50px] w-[50px]">
        <Skeleton className="my-auto h-full w-full rounded-full" />
      </div>
      <div className="flex w-auto flex-col gap-y-2 px-2 py-2">
        <Skeleton className="h-4 w-32 " />
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  );
};

export default UserInfo;
