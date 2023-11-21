import { ReactNode } from 'react';

interface AccountSetupLayoutProps {
  children: ReactNode;
}

const AccountSetupLayout: React.FC<AccountSetupLayoutProps> = ({
  children,
}) => {
  return <div className="mx-auto h-full w-full sm:max-w-lg">{children}</div>;
};

export default AccountSetupLayout;
