'use client';
import Header from '@/components/nav/Header';
import PostImageView, {
  PostImageViewSkeleton,
} from '@/components/post/PostImageView';
import { useExplorePosts } from '@/components/post/useExplorePosts';

interface ExplorePageProps {}

const ExplorePage: React.FC<ExplorePageProps> = ({}) => {
  const { posts, loading } = useExplorePosts();

  return (
    <div>
      <Header />
      <div className="no-scrollbar mx-auto grid grid-cols-3 gap-x-2 gap-y-2 py-5 sm:h-screen sm:max-w-3xl sm:overflow-y-scroll">
        {loading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
              <PostImageViewSkeleton key={id} />
              //   <PostImageView/>
            ))
          : posts.map((post) => (
              <PostImageView key={post.id} imageUrl={post.imageUrl} />
            ))}
      </div>
    </div>
  );
};

export default ExplorePage;
