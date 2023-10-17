import {
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon
} from 'react-icons/bi';
import {
  BsDiscord as DiscordIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsBehance as BehanceIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon
} from 'react-icons/bs';
import { LuTrello, LuWorkflow } from 'react-icons/lu';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog'
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn'
  },
  {
    title: 'Roadmap',
    href: '/roadmap?tribe=frontend-developer',
    icon: <LuWorkflow size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap'
  },
  {
    title: 'Task Board',
    href: '/board',
    icon: <LuTrello size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Task Board'
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard'
  }
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/heyariss',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/riskiarissandy/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/aris.studes',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram'
  },
  {
    title: 'Threads',
    href: '',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Threads'
  },
  {
    title: 'Behance',
    href: 'https://www.behance.net/riskiariss',
    icon: <BehanceIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Behance'
  },
  {
    title: 'Youtube',
    href: 'https://youtu.be/z-9LizCkPqc?si=1_4_inq0p02qMkT8',
    icon: <YoutubeIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Youtube'
  }
];
