import Image from 'next/image';

export const NavBarIcon = {
  Logo: () => {
    return (
      <Image
        src={'/icon-logo.png'}
        width={40}
        height={40}
        alt="logo"
        className="h-full w-full rounded-full"
      />
    );
  },
  NameIcon: () => {
    return (
      <Image
        src={'/logo-name.svg'}
        width={200}
        height={200}
        alt="logo"
        className="h-full w-full filter-none dark:invert"
      />
    );
  },
};
