import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className=" fixed   left-2/4 top-2/4 w-auto -translate-x-1/2 -translate-y-1/2">
      <div className="h-auto  w-[350px] px-2 sm:w-[380px] sm:px-5">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
