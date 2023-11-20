import { UtilityIcons } from '@/components/icons/utitlityIcons';
import { LucideProps } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
  icon: React.FC<LucideProps>;
};

export const NavLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    icon: UtilityIcons.HomeIcon,
  },
  {
    label: 'Search',
    href: '/',
    icon: UtilityIcons.SerachIcon,
  },
  {
    label: 'Messages',
    href: '/',
    icon: UtilityIcons.MessageIcon,
  },
  {
    label: 'Explore',
    href: '/',
    icon: UtilityIcons.ExploreIcon,
  },
  {
    label: 'Notification',
    href: '/',
    icon: UtilityIcons.NotificationIcon,
  },
  {
    label: 'Profile',
    href: '/',
    icon: UtilityIcons.ProfileIcon,
  },
];
