import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import Overview from './Overview';
import { getContestHistory, getProblemsProgress, getSubmissionHistory } from './actions';
import dynamic from 'next/dynamic';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { auth } from '@/auth';
import { User } from '@/lib/types';

const Overview = dynamic(() => import('./Overview'), {
  loading: () => <div>Loading...</div>,
});

const Problemset = dynamic(() => import('./Problemset'), {
  loading: () => <div>Loading...</div>,
});

export default async function Home() {
  const problemProgress = await getProblemsProgress();
  const submissionHistory = await getSubmissionHistory();
  const session = await auth();
  console.log('Overview auth:', session);

  return (
    <div className="space-y-6">
      <Section label={'Problemsets'}>
        <Problemset tags={(session?.user as User).tags || []} />
      </Section>
      <Section label={'Overview'}>
        <Overview problemProgressData={problemProgress} submissionHistory={submissionHistory} />
      </Section>
    </div>
  );
}

const Section = ({ label, children }: { label: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold">{label}</h2>
      <Separator className="my-2 mb-4" />
      {children}
    </div>
  );
};
