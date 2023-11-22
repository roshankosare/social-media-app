import { useEffect, useState } from 'react';
import { UserProfileModel } from '@/types/models/UserProfile';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const useAccountSetup = ({ userId }: { userId: string }) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [about, setAbout] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfileModel | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleNext = async () => {
    const payLoad = {
      profileImage,
      about,
    };

    axios.patch(`/api/profile`, payLoad).then(() => {
      router.push('/app');
    });
  };

  useEffect(() => {
    axios
      .get(`/api/user/${userId}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [userId]);

  return {
    loading,
    user,
    setProfileImage,
    about,
    profileImage,
    setAbout,
    handleNext,
  };
};
export default useAccountSetup;
