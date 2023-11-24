import AccountSetupForm from '@/components/auth/AccountSetupForm';
import { authOptionts } from '@/lib/auth/nextAuth';
import { UserModel } from '@/types/models/UserModel';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface AccountSetupProps {}

const AccountSetup: React.FC<AccountSetupProps> = async () => {
  // const { profileImage, about, setAbout, setProfileImage, handleNext } =
  //   useAccountSetup({ userId: params.userId });

  const session = await getServerSession(authOptionts);
  if (!session) {
    redirect('/sign-in');
  }

  return <AccountSetupForm userId={session.user.id} />;
};
export default AccountSetup;
