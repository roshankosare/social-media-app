import Link from 'next/link';
import TopBar from './TopBar';
import { NavLinks } from './navLinks';

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <div className="hidden h-screen w-80 flex-col gap-y-10 border-r border-gray-300 py-5 dark:border-gray-500  sm:flex">
      <TopBar />
      <div className="flex flex-col gap-y-10 px-5">
        {NavLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex flex-row gap-x-5"
          >
            {<link.icon size={24} />}

            <div className="my-auto">{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
