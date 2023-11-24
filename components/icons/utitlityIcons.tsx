import {
  Bell,
  Compass,
  Heart,
  Home,
  LucideProps,
  MessageCircle,
  MessageSquare,
  PlusSquare,
  Power,
  Search,
  Share2,
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

  logOut: (props: LucideProps) => {
    return <Power {...props} />;
  },

  ProfileIcon: (props: LucideProps) => {
    return <UserCircle2 {...props} />;
  },

  likeIcon: (props: LucideProps) => {
    return <Heart {...props} />;
  },
  CommentsIcon: (props: LucideProps) => {
    return <MessageCircle {...props} />;
  },
  ShareIcon: (props: LucideProps) => {
    return <Share2 {...props} />;
  },
  CreateIocn: (props: LucideProps) => {
    return <PlusSquare {...props} />;
  },
};
