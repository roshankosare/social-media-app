import Link from 'next/link'
import { NavLinks } from './navLinks'

interface BottomBarProps {}

const BottomBar: React.FC<BottomBarProps> = ({}) => {
  return (
    <div className="w-full fixed bottom-0 h-12 flex sm:hidden justify-between px-5 py-2">
      {NavLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          <link.icon size={25} />
        </Link>
      ))}
    </div>
  )
}

export default BottomBar
