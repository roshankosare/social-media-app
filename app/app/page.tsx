import Header from '@/components/nav/Header';
import PostFeed from '@/components/post/PostFeed';
import { PostModel } from '@/types/models/Post';

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
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <PostFeed posts={posts} />
      </div>
    </div>
  );
};
export default Home;
