import { UserProfileModel } from '@/types/models/UserProfile';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchProfile = (userId: string) => {
  const [profile, setProfile] = useState<UserProfileModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [profileNotFound, setProfileNotFound] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`/api/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setProfileNotFound(true);
      });
  }, [userId]);

  return {
    profile,
    loading,
    profileNotFound,
  };
};

export default useFetchProfile;
