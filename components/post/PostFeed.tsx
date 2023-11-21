import { PostModel } from '@/types/models/Post';
import Post from './Post';

interface PostFeedProps {
  posts: PostModel[];
}

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
  return (
    <div className=" no-scrollbar mx-auto flex h-full w-full flex-col gap-y-5 overflow-y-scroll pb-10 sm:max-w-[400px]">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
