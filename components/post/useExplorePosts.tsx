import { PostModel } from '@/types/models/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useExplorePosts = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios.get('/api/post/explore').then((res) => {
      setLoading(false);
      setPosts(res.data);
      setPage((pre) => pre + 1);
    });
  }, []);

  const fetchNextPosts = () => {
    axios
      .get('/api/post/explore', {
        params: {
          page: page,
        },
      })
      .then((res) => {
        setLoading(false);
        setPosts((pre) => [...pre, ...res.data]);
        setPage((pre) => pre + 1);
      });
  };
  return {
    posts,
    loading,
  };
};
