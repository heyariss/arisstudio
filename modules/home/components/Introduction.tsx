import Link from 'next/link';

import { TbCoffee } from 'react-icons/tb';

import { SAWERIA_URL } from '@/common/constant';




export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m 
          </h1> <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <Link href={SAWERIA_URL} target="_blank" aria-label="buy-me-cofey">
          <TbCoffee size={25} />
        </Link>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Web Developer</li>
          <li>
            Based in Bogor <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 justify justify-items-center">
          I am interested in web developer and UI/UX Design. with more than a years experience in Information Technology.
          I can do anything that is related to my role. I am responsible person, confident, able to socialize quickly, often work
          with team and eager to learn, work with curiosity and empathy to meet challenges to develop my skill.
        </p>
      </div>
    </section>
  );
}
