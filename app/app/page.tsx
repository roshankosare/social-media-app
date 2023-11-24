import Header from '@/components/nav/Header';
import PostFeed from '@/components/post/PostFeed';
import SuggestedUsers from '@/components/utitlity/SuggestedUsers';
import { PostModel } from '@/types/models/Post';
import { UserModel } from '@/types/models/UserModel';

interface HomeProps {}

const posts: PostModel[] = [];

const users: UserModel[] = [];
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="flex-row sm:flex">
      <Header />
      <div className="h-screen w-full sm:w-[800px]">
        <PostFeed />
      </div>
      <div className="hidden h-screen w-full sm:block sm:w-[300px]">
        {' '}
        <SuggestedUsers users={users} />
      </div>
    </div>
  );
};
export default Home;
