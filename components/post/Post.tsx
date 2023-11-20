import { PostModel } from '@/types/models/Post';
import { Card } from '../ui/card';
import Avatar from '../ui/avatar';
import Image from 'next/image';
import { UtilityIcons } from '../icons/utitlityIcons';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Card className="border-none">
      <div className="flex flex-row gap-x-2 px-2 py-3 sm:px-5">
        <div className="flex flex-row gap-x-4">
          <Avatar url={post.user.avatar} />
          <p className="my-auto">{post.user.username}</p>
        </div>
      </div>
      <div className="h-auto w-full">
        <Image
          src={post.imageUrl}
          width={800}
          height={600}
          alt=""
          className="h-full w-auto"
        />
      </div>

      <div className="flex gap-x-4 py-4 ">
        <UtilityIcons.likeIcon size={28} />
      </div>
    </Card>
  );
};

export default Post;
