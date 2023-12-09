import React from 'react'

import { SlEmotsmile as RecomendedIcon } from 'react-icons/sl';
import Card from '@/common/components/elements/Card';
import Link from 'next/link';
import Image from '@/common/components/elements/Image';
import { RecomendedProps } from '@/common/types/recomended';
import {BsLinkedin as LinkedinIcon} from 'react-icons/bs';


export default function RecomendedCard({ image, name, profession, text, linkedin }: RecomendedProps) {

  return (
    <div className='items-center rounded-lg py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800'>
      <div className="flex justify-between">
        <div className="flex items-center ml-4 mr-2 ">
          <Image src={image} width={48} height={48} alt={name} className="min-w-32 min-[32]: dark:border-[#4532dc] rounded-sm lg:rounded-xl" />
          <div className="flex flex-col gap-1 items-start ml-2">
            <h4 className="text-sm font-semibold leading-none text-default-600">{name}</h4>
            <p className="text-xs tracking-tight text-default-400">{profession}</p>
          </div>
        </div>

            <div className="flex justify-content-end p-3" >
                <Link href={linkedin} target="_blank" aria-label="linkedin" >
                  <LinkedinIcon size={25} />
                </Link>
            </div>
      </div>
      <p className="px-4 py-4 text-base text-justify justify-content-between dark:text-white">
        {text}
      </p>

    </div>
  );
}
