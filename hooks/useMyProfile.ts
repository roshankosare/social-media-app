import { UserProfileModel } from '@/types/models/UserProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useMyProfile = () => {
  const [profile, setProfile] = useState<UserProfileModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios.get('/api/profile').then((res) => {
      setProfile(res.data);
      setLoading(false);
    });
  }, []);

  return {
    profile,
    loading,
  };
};
