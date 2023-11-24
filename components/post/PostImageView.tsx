import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { Card } from '../ui/card';

interface PostImageViewProps {
  imageUrl: string;
}

const PostImageView: React.FC<PostImageViewProps> = ({ imageUrl }) => {
  return (
    <Card className="h-[150px] w-full rounded-none border-none bg-gray-100 dark:bg-zinc-900 sm:h-[300px] ">
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt="image"
        className="mx-auto my-auto h-full w-auto "
      />
    </Card>
  );
};

export const PostImageViewSkeleton = () => {
  return (
    <div className=" h-[150px] w-full sm:h-[300px] ">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default PostImageView;
