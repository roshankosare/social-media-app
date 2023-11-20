import Link from 'next/link';
import { NavLinks } from './navLinks';

interface BottomBarProps {}

const BottomBar: React.FC<BottomBarProps> = ({}) => {
  return (
    <div className="fixed bottom-0 flex h-12 w-full justify-between px-5 py-2 sm:hidden">
      {NavLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          <link.icon size={25} />
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
