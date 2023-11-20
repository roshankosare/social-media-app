import {
  Bell,
  Compass,
  Home,
  LucideProps,
  MessageSquare,
  Search,
  UserCircle2,
} from 'lucide-react';

export const UtilityIcons = {
  HomeIcon: (props: LucideProps) => {
    return <Home {...props} />;
  },
  SerachIcon: (props: LucideProps) => {
    return <Search {...props} />;
  },
  MessageIcon: (props: LucideProps) => {
    return <MessageSquare {...props} />;
  },
  ExploreIcon: (props: LucideProps) => {
    return <Compass {...props} />;
  },

  NotificationIcon: (props: LucideProps) => {
    return <Bell {...props} />;
  },

  ProfileIcon: (props: LucideProps) => {
    return <UserCircle2 {...props} />;
  },
};
