'use client';
import PostImageView, { PostImageViewSkeleton } from './PostImageView';
import { useUsersPosts } from '@/hooks/useUsersPosts';

interface UsersPostsProps {
  userId: string;
}

const UsersPosts: React.FC<UsersPostsProps> = ({ userId }) => {
  const { posts, loading } = useUsersPosts(userId);
  return (
    <div className=" grid h-auto w-full grid-cols-3 gap-x-2 gap-y-2 py-2">
      {loading
        ? [1, 2, 3, 4, 5, 6].map((id) => <PostImageViewSkeleton key={id} />)
        : posts.map((post) => (
            <PostImageView key={post.id} imageUrl={post.imageUrl} />
          ))}
    </div>
  );
};

export default UsersPosts;
