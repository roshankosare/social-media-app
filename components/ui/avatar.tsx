import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <Image
      src={url || '/avatar.jpg'}
      width={200}
      height={200}
      alt=""
      className=" h-full max-h-[50px] w-full max-w-[50px] rounded-full border border-gray-300 dark:border-gray-500"
    />
  );
};
export default Avatar;
