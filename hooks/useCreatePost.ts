import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useCreatePost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState<string | null>(null);

  const router = useRouter();

  const handleUploadPost = async () => {
    const form = new FormData();
    if (image) form.append('image', image);

    if (caption) form.set('caption', caption);

    axios
      .post(`/api/post`, form)
      .then((res) => {
        router.push('/app');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    image,
    caption,
    setCaption,
    setImage,
    handleUploadPost,
  };
};
