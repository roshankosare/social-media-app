import Header from '@/components/nav/Header';
import PostFeed from '@/components/post/PostFeed';
import SuggestedUsers from '@/components/utitlity/SuggestedUsers';
import { PostModel } from '@/types/models/Post';
import { User } from '@/types/models/UserModel';

interface HomeProps {}

const posts: PostModel[] = [
  {
    id: 'jksfjkd',
    likeCount: 52,
    commentsCount: 65,
    userId: '',
    imageUrl:
      'https://th.bing.com/th/id/R.ec4dd5da2b12b3c2b16fc743dbcbf1a7?rik=XeaUE7xe04lOlg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ZO8ZcOU55Ko%2fUUJD6VzxmOI%2fAAAAAAAAEb0%2fvc_efLCQbhs%2fs1600%2fphoto.PNG&ehk=jvZZd2SUg0yZx7QVBCLZ6niZVEFWeBcRfsd09P5EtxU%3d&risl=&pid=ImgRaw&r=0',
    user: {
      username: 'roshan kosare',
      email: 'test@test.com',
      avatar: '/avatar.png',
    },
  },
  {
    id: 'jksfjkd',
    likeCount: 52,
    commentsCount: 65,
    userId: '',
    imageUrl:
      'https://th.bing.com/th/id/R.ec4dd5da2b12b3c2b16fc743dbcbf1a7?rik=XeaUE7xe04lOlg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ZO8ZcOU55Ko%2fUUJD6VzxmOI%2fAAAAAAAAEb0%2fvc_efLCQbhs%2fs1600%2fphoto.PNG&ehk=jvZZd2SUg0yZx7QVBCLZ6niZVEFWeBcRfsd09P5EtxU%3d&risl=&pid=ImgRaw&r=0',
    user: {
      username: 'roshan kosare',
      email: 'test@test.com',
      avatar: '/avatar.png',
    },
  },
  {
    id: 'jksfjkd',
    likeCount: 52,
    commentsCount: 65,
    userId: '',
    imageUrl:
      'https://th.bing.com/th/id/R.ec4dd5da2b12b3c2b16fc743dbcbf1a7?rik=XeaUE7xe04lOlg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ZO8ZcOU55Ko%2fUUJD6VzxmOI%2fAAAAAAAAEb0%2fvc_efLCQbhs%2fs1600%2fphoto.PNG&ehk=jvZZd2SUg0yZx7QVBCLZ6niZVEFWeBcRfsd09P5EtxU%3d&risl=&pid=ImgRaw&r=0',
    user: {
      username: 'roshan kosare',
      email: 'test@test.com',
      avatar: '/avatar.png',
    },
  },
];

const users: User[] = [
  {
    username: 'roshan kosare',
    email: 'email.com',
    avatar: '/avatar.png',
  },
  {
    username: 'john cena kosare',
    email: 'email.com',
    avatar: '/avatar.png',
  },
  {
    username: 'roshan kosare',
    email: 'email.com',
    avatar: '/avatar.png',
  },
  {
    username: 'roshan kosare',
    email: 'email.com',
    avatar: '/avatar.png',
  },
  {
    username: 'roshan kosare',
    email: 'email.com',
    avatar: '/avatar.png',
  },
];
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="flex-row sm:flex">
      <Header />
      <div className="h-screen w-full sm:w-[800px]">
        <PostFeed posts={posts} />
      </div>
      <div className="hidden h-screen w-full sm:block sm:w-[300px]">
        {' '}
        <SuggestedUsers users={users} />
      </div>
    </div>
  );
};
export default Home;
