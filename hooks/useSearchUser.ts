import { UserProfileModel } from '@/types/models/UserProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useSearchUser = () => {
  const [users, setUsers] = useState<UserProfileModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    setUsers([]);
    const searchUsers = () => {
      if (username.length < 4) {
        return;
      }
      axios
        .get('/api/user', {
          params: {
            username: username,
            page: page,
          },
        })
        .then((res) => {
          setLoading(false);
          setUsers(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    searchUsers();
  }, [username, page]);

  return { users, setUsername, loading, username };
};
