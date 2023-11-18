import TopBar from "./TopBar"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-row px-2 sm:px-5 py-2 justify-between w-full h-[75px] border-b sm:hidden border-gray-300 dark:border-gray-500">
      <TopBar/>
    </div>
  )
}
export default Header
