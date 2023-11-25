'use client';

import UsersPosts from '@/components/post/UsersPosts';
import UserProfile, {
  UserProfileSkeleton,
} from '@/components/user/UserProfile';
import useFetchProfile from '@/hooks/useFetchProfile';
import { notFound } from 'next/navigation';

interface ProfilePageProps {
  params: { userId: string };
}

const UserProfilePage: React.FC<ProfilePageProps> = ({ params }) => {
  const { loading, profile, profileNotFound } = useFetchProfile(params.userId);
  return (
    <div className="no-scrollbar h-full w-full overflow-x-scroll px-5">
      <div className="mx-auto flex w-full flex-col py-10 sm:max-w-3xl">
        {loading ? (
          <UserProfileSkeleton />
        ) : !profile && profileNotFound ? (
          <>{notFound()}</>
        ) : profile ? (
          <UserProfile userProfile={profile} myProfile={false} />
        ) : (
          <UserProfileSkeleton />
        )}
        <hr />
        {profile && <UsersPosts userId={profile.id} />}
      </div>
    </div>
  );
};
export default UserProfilePage;
