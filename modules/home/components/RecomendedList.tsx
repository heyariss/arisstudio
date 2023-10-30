import Link from 'next/link';
import dynamic from 'next/dynamic';

const RecomendedCard = dynamic(() => import('@/modules/home/components/RecomendedCard'));
import { SlEmotsmile as RecomendedIcon } from 'react-icons/sl';


import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { RECOMENDED } from '@/common/constant/recomended';
import { RECOMENDEDDUA } from '@/common/constant/recomended';

export default function RecomendedList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="What You Can Expect" icon={<RecomendedIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">What Others Have to Say About Aris's Work</p>
        </SectionSubHeading>
      </div>

      {/* Card */}
      <div className="flex overflow-y-hidden overflow-x-scroll scrolling-touch no-scrollbar gap-4">
        <div className="flex flex-row w-387px h-331 justify-content-start gap-4">
          {RECOMENDED?.map((recomended, index) => <RecomendedCard key={index} {...recomended} />)}
        </div>
      </div>

    </section>
  );
}
