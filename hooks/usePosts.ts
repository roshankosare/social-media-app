import { PostModel } from '@/types/models/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { boolean } from 'zod';

export const usePosts = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loadingPosts, setLoadingPost] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get('/api/post')
      .then((res) => {
        setPosts(res.data);
        setLoadingPost(false);
        setPage((pre) => pre + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchNextPosts = () => {
    axios
      .get('/api/post', {
        params: {
          page: page,
        },
      })
      .then((res) => {
        setPosts((pre) => [...pre, ...res.data]);
        setLoadingPost(false);
        setPage((pre) => pre + 1);
      });
  };

  return {
    posts,
    loadingPosts,
  };
};
