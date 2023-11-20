import { NavBarIcon } from '../icons';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div className="flex flex-row justify-center gap-x-2 py-2">
      <div className="h-[35px] w-[35px]">
        <NavBarIcon.Logo />
      </div>
      <div className=" my-auto h-[25px] w-auto">
        <NavBarIcon.NameIcon />
      </div>
    </div>
  );
};

export default Logo;
