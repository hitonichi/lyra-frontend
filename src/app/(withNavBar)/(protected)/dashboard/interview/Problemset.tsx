'use client';

import { Problem, ProblemProgressData, getProblemset } from './actions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProblemsetProps {
  data: ProblemProgressData;
}

const mapTags = (tags: string[]) => {
  return tags.map((tag) => {
    return {
      label: tag[0].toUpperCase() + tag.substring(1),
      value: tag,
    };
  });
};

const BASE_TAG_OPTIONS = [
  {
    label: 'All Categories',
    value: 'all',
  },
  {
    label: 'Daily',
    value: 'daily',
  },
];

const MOCK_DAILY_PROBLEM = {
  acRate: 52.27875903425427,
  difficulty: 'Easy',
  title: 'Two Sum',
  titleSlug: 'two-sum',
  topicTags: [
    {
      name: 'Daily',
      id: 'VG9waWNUYWdOb2RlOjU=',
      slug: 'daily',
    },
    {
      name: 'Array',
      id: 'VG9waWNUYWdOb2RlOjU=',
      slug: 'array',
    },
    {
      name: 'Hash Table',
      id: 'VG9waWNUYWdOb2RlOjY=',
      slug: 'hash-table',
    },
  ],
};

export default function Problemset({ tags }: { tags: string[] }) {
  const [selectedTag, setSelectedTag] = useState<string | undefined>('all');
  const [baseProblemset, setBaseProblemset] = useState<Problem[] | undefined>([]);
  // console.log('check data Problemset: ', data);

  const [filteredProblemset, setFilteredProblemset] = useState<Problem[] | undefined>([]);

  const mappedTags = mapTags(tags);

  useEffect(() => {
    async function fetchProblemset() {
      const { problemsetQuestionList } = await getProblemset();
      setBaseProblemset(problemsetQuestionList);
    }

    fetchProblemset();
  }, []);

  useEffect(() => {
    if (selectedTag == 'all') setFilteredProblemset(baseProblemset);
    else if (selectedTag == 'daily') setFilteredProblemset([MOCK_DAILY_PROBLEM]);
    else if (selectedTag)
      setFilteredProblemset(
        baseProblemset?.filter((problem) => problem.topicTags.some((tag) => tag.slug == selectedTag)),
      );
  }, [selectedTag, baseProblemset]);

  if (!filteredProblemset || filteredProblemset.length == 0) return <div>Loading...</div>;

  return (
    <div>
      <Card className="flex flex-col items-center justify-start gap-4 backdrop-blur border-white/10 shadow w-full p-4">
        <CardHeader className="flex flex-row items-start justify-center gap-2 py-2">
          {BASE_TAG_OPTIONS.concat(mappedTags).map((tag) => {
            return (
              <Button
                key={tag.value}
                variant={selectedTag == tag.value ? 'default' : 'outline'}
                onClick={(e) => {
                  setSelectedTag(tag.value);
                }}
                className="!space-y-0 !mt-0"
              >
                {tag.label}
              </Button>
            );
          })}
          <Button className="!space-y-0 !mt-0" variant={'default'}>
            +
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 w-full max-h-[480px] overflow-y-scroll">
          {filteredProblemset &&
            filteredProblemset.map((problem) => <ProblemCard key={problem.titleSlug} problem={problem} />)}
        </CardContent>
      </Card>
    </div>
  );
}

const ProblemCard = ({ problem }: { problem: Problem }) => {
  return (
    <Card
      className={`w-full ${problem.topicTags.some((tag) => tag.slug == 'daily') ? 'bg-yellow-100' : ''} hover:bg-primary-foreground cursor-pointer hover:shadow-lg`}
    >
      <CardHeader className="truncate pt-4 pb-2">
        <div className="flex justify-between">
          <span className="font-bold">{problem.title}</span>
          {/* <span>{problem.difficulty}</span> */}
          <DifficultyBadge diff={problem.difficulty} />
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-4">
        <div className="flex flex-wrap gap-2"></div>
        <div className="flex justify-between">
          <span className="space-x-2">
            {problem.topicTags.map((tag) => (
              <Badge key={tag.slug} variant={'outline'} className="bg-white">
                {tag.name}
              </Badge>
            ))}
          </span>
          <span>{Math.round(problem.acRate)} %</span>
        </div>
      </CardContent>
    </Card>
  );
};

const DifficultyBadge = ({ diff }: { diff: string }) => {
  switch (diff) {
    case 'Easy':
      return (
        <Badge variant={'default'} className={`bg-[#02b8a3] hover:bg-[#02b8a3]`}>
          {diff}
        </Badge>
      );
    case 'Medium':
      return (
        <Badge variant={'default'} className={`bg-[#ffc030] hover:bg-[#ffc030]`}>
          {diff}
        </Badge>
      );
    default:
      return (
        <Badge variant={'default'} className={`bg-[#ef4743] hover:bg-[#ef4743]`}>
          {diff}
        </Badge>
      );
  }
};
