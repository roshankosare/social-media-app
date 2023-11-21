import { Card } from '../ui/card';
import TopBar from './TopBar';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Card className="sticky top-0 flex h-[60px] w-full flex-row justify-between border-b border-gray-300 px-2 py-2 dark:border-gray-500  sm:hidden sm:px-5">
      <TopBar />
    </Card>
  );
};
export default Header;
