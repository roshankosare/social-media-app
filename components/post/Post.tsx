import { type Post, type UserProfile } from '@prisma/client';
import { Card } from '../ui/card';

interface PostProps {
  post: Post & Pick<UserProfile, 'username' | 'avatar'>;
}

const Post: React.FC<PostProps> = ({}) => {
  return (
    <Card>
      <div className="flex flex-row gap-x-2"></div>
    </Card>
  );
};

export default Post;
