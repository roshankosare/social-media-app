import { useState } from 'react';

const useAccountSetup = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [about, setAbout] = useState<string | null>(null);

  const handleNext = async () => {
    console.log(profileImage, about);
  };

  return {
    setProfileImage,
    about,
    profileImage,
    setAbout,
    handleNext,
  };
};
export default useAccountSetup;
