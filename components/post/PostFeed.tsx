import { PostModel } from '@/types/models/Post';
import Post from './Post';

interface PostFeedProps {
  posts: PostModel[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <div className=" no-scrollbar flex h-full w-full flex-col gap-y-5 overflow-y-scroll px-2 sm:px-16">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
