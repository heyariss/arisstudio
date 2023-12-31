import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiAnaconda,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGit,
  SiGraphql,
  SiPostman,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobexd,
  SiWordpress
} from 'react-icons/si';

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = '100%';

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  Anaconda: <SiAnaconda size={iconSize} className="text-green-500" />,
  'WordPress': <SiWordpress size={iconSize} className="text-sky-600" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-500" />,
  'Material UI': <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  'React Native': <SiReact size={iconSize} className="text-sky-600" />,
  Expo: <SiExpo size={iconSize} />,
  SASS: <SiSass size={iconSize} className="text-pink-600" />,
  'Postman': <SiPostman size={iconSize} className="text-orange-500" />,
  'Firebase': <SiFirebase size={iconSize} className="text-yellow-500" />,
  'Framer Motion': <SiFramer size={iconSize} />,
  'Nuxt.js': <SiNuxtdotjs size={iconSize} className="text-green-600" />,
  'Vue.js': <SiVuedotjs size={iconSize} className="text-green-500" />,
  Jest: <SiJest size={iconSize} className="text-orange-600" />,
  'Express.js': <SiExpress size={iconSize} />,
  'React Query': <SiReactquery size={iconSize} className="text-red-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  'Node JS': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} />,
  Git: <SiGit  size={iconSize} className="text-orange-500" />,
  Storybook: <SiStorybook size={iconSize} className="text-pink-500" />,
  'React Router': <SiReactrouter size={iconSize} className="text-pink-500" />,
  'React Hook Form': <SiReacthookform size={iconSize} className="text-pink-500" />,
  'Figma': <SiFigma size={iconSize} />,
  'Adobe Illustrator': <SiAdobeillustrator size={iconSize} className="text-orange-900 dark:text-orange-500" />,
  'Adobe Photoshop': <SiAdobephotoshop size={iconSize} className="text-blue-950 dark:text-blue-500" />,
  'Adobe XD': <SiAdobexd size={iconSize} className="text-pink-900" />,
  'Adobe After Effect': <SiAdobeaftereffects size={iconSize} className="text-indigo-500 dark:text-indigo-300" />,
  'React Table': <SiReacttable size={iconSize} className="text-rose-600" />
};
