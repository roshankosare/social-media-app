'use client';

import Header from '@/components/nav/Header';
import CreatePost from '@/components/post/CreatePost';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCreatePost } from '@/hooks/useCreatePost';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface CreatePostPageProps {}

const CreatePostPage: React.FC<CreatePostPageProps> = ({}) => {
  const { caption, setCaption, image, setImage, handleUploadPost } =
    useCreatePost();
  return (
    <>
      <Header />
      <div className="flex h-screen w-full justify-center">
        {!image ? (
          <div className=" flex h-full w-full flex-col justify-center gap-y-8  px-5  py-10 sm:px-10">
            <p className=" mx-auto  text-2xl font-bold text-gray-600 dark:text-gray-300 sm:text-4xl">
              Let`s Share The Moment...
            </p>
            <Image
              src={'/wine-glasses.png'}
              width={200}
              height={200}
              alt="wine"
              className="mx-auto h-[80px] w-[80px] dark:invert"
            />
            <label
              htmlFor="selectImage"
              className={cn(
                buttonVariants({ variant: 'default' }),
                ' mx-auto max-w-[200px]'
              )}
            >
              select from device
            </label>
            <Input
              type="file"
              id="selectImage"
              className="hidden"
              onChange={(e) => {
                setImage(e.target.files?.[0] || null);
              }}
            />
          </div>
        ) : (
          <CreatePost
            image={image}
            setCaption={(value: string) => setCaption(value)}
            resetImage={() => setImage(null)}
            caption={caption || ''}
            onUploadPost={handleUploadPost}
          />
        )}
      </div>
    </>
  );
};

export default CreatePostPage;
