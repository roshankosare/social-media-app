import Link from 'next/link'
import TopBar from './TopBar'
import { NavLinks } from './navLinks'

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <div className="sm:flex hidden flex-col gap-y-10 border-r border-gray-300 dark:border-gray-500 py-5 w-80  h-screen">
      <TopBar />
      <div className="flex flex-col gap-y-10 px-5">
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.href} className="flex flex-row gap-x-5">
            {<link.icon size={24} />}
            
             <div className='my-auto'>
             {link.label}
             </div>
            </Link>

        ))}
      </div>
    </div>
  )
}
export default SideBar
