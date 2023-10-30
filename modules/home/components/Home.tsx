import { lazy } from 'react';

import Breakline from '@/common/components/elements/Breakline';


import ResponsiveBanner from './Banner';
import CareerList from './CareerList';
import LatestArticle from './LatestArticle';
import RecomendedList from './RecomendedList';


const SkillList = lazy(() => import('./SkillList'));

export default function Home() {
  return (
    <>
      <ResponsiveBanner />
      <Breakline className="my-6" />
      <LatestArticle />
      <Breakline className="my-6" />
      <CareerList />
      <Breakline className="my-6" />
      <SkillList />
      <Breakline className="my-6" />
      <RecomendedList />
    </>
  );
}
