'use client';

import { ProblemProgressData, getProblemsProgress } from '@/app/(withNavBar)/(protected)/dashboard/interview/actions';
import { useEffect, useState } from 'react';
import PieChart from '../PieChart';
import { Separator } from '@radix-ui/react-separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import Link from 'next/link';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Badge } from '../ui/badge';
import { itvQuestions } from './mocks';
import { InterviewQuestion } from './types';

export default function InterviewCard() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem key={'a'}>
          <InterviewProblemsetCard />
        </CarouselItem>
        {itvQuestions.slice(0, 3).map((q, idx) => (
          <CarouselItem key={idx}>
            <DailyInterviewQuestion itvQuestion={q} id={idx} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-8 w-8 left-0" />
      <CarouselNext className="h-8 w-8 right-0" />
    </Carousel>
  );
}

interface DailyInterviewQuestionProps {
  itvQuestion: InterviewQuestion;
  id: number;
}

const DailyInterviewQuestion = ({ itvQuestion, id }: DailyInterviewQuestionProps) => {
  const { question, answer, field, ref } = itvQuestion;

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <div className="w-[70%] flex items-center justify-center rounded-lg cursor-pointer h-full bg-secondary/10 shadow  mx-auto text-center font-bold p-4">
          {question}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[50%]">
        <DialogHeader>
          <DialogTitle>Daily Interview Question ({id + 1}/3)</DialogTitle>
          <DialogDescription>
            <Badge variant={'outline'}>{field}</Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 bg-primary/10 rounded-lg p-4">
          <span className="text-lg font-bold text-primary">Question:</span>
          <span>{question}</span>
        </div>
        <div className="flex flex-col gap-2 bg-secondary/10 rounded-lg p-4">
          <span className="text-lg font-bold text-secondary">Answer:</span>
          <span>{answer}</span>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="default" className="bg-black/10 text-black">
              Close
            </Button>
          </DialogClose>
          <Link href={ref} rel="noopener noreferrer" target="_blank">
            <Button type="button" variant="default">
              Read more
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

function InterviewProblemsetCard() {
  const [problemProgress, setProblemProgress] = useState<ProblemProgressData | undefined>();

  useEffect(() => {
    async function fetchProblemProgress() {
      const res = await getProblemsProgress();
      setProblemProgress(res);
    }
    fetchProblemProgress();
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      {!problemProgress && <div>Loading...</div>}
      {problemProgress && (
        <>
          <div className="mr-16 flex flex-col justify-center items-center self-stretch">
            <div className="w-full flex items-center gap-2 justify-between">
              <span className="font-bold">Easy: </span>
              <span>{problemProgress.easySolved}</span>
            </div>
            <div className="w-full flex items-center gap-2 justify-between">
              <span className="font-bold">Medium: </span>
              <span>{problemProgress.mediumSolved}</span>
            </div>
            <div className="w-full flex items-center gap-2 justify-between">
              <span className="font-bold">Hard: </span>
              <span>{problemProgress.hardSolved}</span>
            </div>
            <Separator className="text-black bg-black" />
            <div className="w-full flex items-center gap-2 justify-between">
              <span className="font-bold">Total: </span>
              <span className="font-bold">{problemProgress.solvedProblem}</span>
            </div>
          </div>
          <div className="max-w-[140px] max-h-[140px]">
            <PieChart
              data={[
                {
                  title: 'Easy',
                  value: problemProgress.easySolved / problemProgress.solvedProblem,
                  color: '#02b8a3',
                },
                {
                  title: 'Medium',
                  value: problemProgress.mediumSolved / problemProgress.solvedProblem,
                  color: '#ffc030',
                },
                { title: 'Hard', value: problemProgress.hardSolved / problemProgress.solvedProblem, color: '#ef4743' },
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
}
