import { Icons } from '@/icons'
import { ThemeToggle } from './ThemeToggle'

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  return (
    <div className="flex h-[60px] w-full  flex-row justify-between px-2">
      <div className=" flex h-full w-full flex-row gap-x-2">
        <div className=" my-auto h-[40px] w-[40px] rounded-full border-[2px] border-black dark:border-white">
          <Icons.Logo />
        </div>
        <div className="my-auto h-[30px]    w-auto">
          <Icons.NameIcon />
        </div>
      </div>

      <div className="my-auto">
        <ThemeToggle />
      </div>
    </div>
  )
}
export default TopBar
