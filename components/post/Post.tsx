import { PostModel } from '@/types/models/Post';
import { Card } from '../ui/card';
import Avatar from '../ui/avatar';
import Image from 'next/image';
import { UtilityIcons } from '../icons/utitlityIcons';
import { Skeleton } from '../ui/skeleton';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Card className="mb-2 border-none">
      <div className="flex flex-row gap-x-2  px-4 py-3 sm:px-0 ">
        <div className="flex flex-row gap-x-4">
          <Avatar url={post.user.avatar} />
          <p className="sm:text-md my-auto text-sm font-bold">
            {post.user.username}
          </p>
        </div>
      </div>
      <div className="h-auto w-full">
        <Image
          src={post.imageUrl}
          width={800}
          height={600}
          alt=""
          className="h-auto w-full"
        />
      </div>

      <div className="flex gap-x-4 px-4 py-4 sm:px-0 ">
        <UtilityIcons.likeIcon size={25} />
        <UtilityIcons.CommentsIcon size={25} />
        <UtilityIcons.ShareIcon size={25} />
      </div>
      <div className="flex flex-col gap-y-2">
        {' '}
        <p className="w-full px-5 text-sm font-bold">
          {post.likeCount + ' ' + 'likes'}
        </p>
        <p className="py w-full px-5 text-sm text-gray-600 dark:text-gray-300">
          {'view all ' + post.commentsCount + ' comments'}
        </p>
      </div>
    </Card>
  );
};

export const PostSkeleton = () => {
  return (
    <Card className="mb-2 border-none">
      <div className="flex flex-row gap-x-2  px-4 py-3 sm:px-0 ">
        <div className="flex flex-row gap-x-4">
          <Skeleton className="h-[40px] w-[40px] rounded-full" />
          <Skeleton className="my-auto h-4 w-28 rounded-none" />
        </div>
      </div>
      <div className="h-auto w-full">
        <Skeleton className="h-72 w-full" />
      </div>

      <div className="flex gap-x-4 px-4 py-4 sm:px-0 ">
        <Skeleton className="h-[25px] w-[25px] rounded-full" />
        <Skeleton className="h-[25px] w-[25px] rounded-full" />
        <Skeleton className="h-[25px] w-[25px] rounded-full" />
      </div>
    </Card>
  );
};

export default Post;
