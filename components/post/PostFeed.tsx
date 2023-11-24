'use client';
import Post, { PostSkeleton } from './Post';
import { usePosts } from '../../hooks/usePosts';

interface PostFeedProps {}

const PostFeed: React.FC<PostFeedProps> = () => {
  const { posts, loadingPosts } = usePosts();
  return (
    <div className=" no-scrollbar mx-auto flex h-full w-full flex-col gap-y-5 overflow-y-scroll pb-10 sm:max-w-[400px]">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} post={post} />
          // <PostSkeleton key={post.id}/>
        ))}
      {loadingPosts && [1, 2, 3, 4, 5].map((num) => <PostSkeleton key={num} />)}
    </div>
  );
};

export default PostFeed;
