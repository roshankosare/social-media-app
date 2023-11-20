import { NavBarIcon } from '@/components/icons';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  return (
    <div className="flex h-[40px] w-full  flex-row justify-between px-2">
      <div className=" flex h-full w-full flex-row gap-x-2">
        <div className=" my-auto h-[28px] w-[28px] rounded-full border-[2px] border-black dark:border-white">
          <NavBarIcon.Logo />
        </div>
        <div className="my-auto h-[20px]    w-auto">
          <NavBarIcon.NameIcon />
        </div>
      </div>

      <div className="my-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
export default TopBar;
