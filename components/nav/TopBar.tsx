import { Icons } from '@/icons'
import { ThemeToggle } from './ThemeToggle'

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  return (
    <div className="flex flex-row px-2  justify-between w-full h-[60px]">
      <div className=" flex flex-row gap-x-2 h-full w-full">
        <div className=" border-[2px] dark:border-white border-black rounded-full w-[40px] h-[40px] my-auto">
          <Icons.Logo />
        </div>
        <div className="h-[30px] w-auto    my-auto">
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
