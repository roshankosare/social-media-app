'use client';
import UsersPosts from '@/components/post/UsersPosts';
import UserProfile, {
  UserProfileSkeleton,
} from '@/components/user/UserProfile';
import { useMyProfile } from '@/hooks/useMyProfile';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  const { profile, loading } = useMyProfile();
  return (
    <div className="no-scrollbar h-full w-full overflow-x-scroll px-5">
      <div className="mx-auto flex w-full flex-col py-10 sm:max-w-3xl">
        {loading ? (
          <UserProfileSkeleton />
        ) : (
          profile && <UserProfile userProfile={profile} myProfile={true} />
        )}
        <hr />
        {profile && <UsersPosts userId={profile.id} />}
      </div>
    </div>
  );
};

export default ProfilePage;
