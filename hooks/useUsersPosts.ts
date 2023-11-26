import { PostModel } from '@/types/models/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useUsersPosts = (userId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`/api/post/profile/${userId}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
        setPage((pre) => pre + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const fetchNextPosts = () => {
    axios
      .get(`/api/post/profile/${userId}`, {
        params: {
          page,
        },
      })
      .then((res) => {
        setPosts((pre) => [...pre, res.data]);
        setLoading(false);
        setPage((pre) => pre + 1);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return {
    posts,
    loading,
  };
};
