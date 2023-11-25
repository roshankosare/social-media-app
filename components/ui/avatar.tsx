import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <Image
      src={url || '/avatar.jpg'}
      width={80}
      height={80}
      alt=""
      className="h[40px] w-[40px] rounded-full border border-gray-300 dark:border-gray-500"
    />
  );
};
export default Avatar;
