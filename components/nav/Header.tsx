import Image from 'next/image'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-row px-2 sm:px-5 py-2 justify-between w-full h-[75px]">
      <div className=" flex flex-row gap-x-2 h-full w-full">
        <Image
          src={'/icon-logo.png'}
          width={40}
          height={40}
          alt="logo"
          className=" border-[2px] dark:border-white border-black rounded-full w-[40px] h-[40px] my-auto"
        ></Image>
        <Image
          src={'/logo-name.png'}
          width={200}
          height={200}
          alt="logo"
          className="h-[30px] w-auto dark:invert invert-0 my-auto"
        ></Image>
      </div>
    </div>
  )
}
export default Header
