'use client';

import { Article } from './types';
import { articles } from './mocks';
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
import { Card, CardContent, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function RecommendationsCard() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center justify-center font-bold text-lg shadow bg-primary/10 rounded-lg hover:bg-primary/20 cursor-pointer col-start-1 col-span-1 row-start-1 row-span-1">
            <span>Articles</span>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[45%] w-[45%] max-h-[80vh] h-4/5 pb-1">
          <DialogHeader className="space-y-2">
            <DialogTitle>Related Articles</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 rounded-lg py-4 max-h-full">
            <ArticleList articles={articles} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="default" className="bg-black/10 text-black">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex items-center justify-center font-bold text-lg shadow bg-secondary/10 rounded-lg hover:bg-secondary/20 cursor-pointer col-start-2 col-span-1 row-start-1 row-span-1">
        <span>Problems</span>
      </div>
      <div className="flex items-center justify-center font-bold text-lg shadow bg-secondary/10 rounded-lg hover:bg-secondary/20 cursor-pointer col-start-1 col-span-1 row-start-2 row-span-1">
        <span>Courses</span>
      </div>
      <div className="flex items-center justify-center font-bold text-lg shadow bg-primary/10 rounded-lg hover:bg-primary/20 cursor-pointer col-start-2 col-span-1 row-start-2 row-span-1">
        <span>Projects</span>
      </div>
    </div>
  );
}

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="flex w-full flex-col gap-4 px-2 max-h-[360px] overflow-y-scroll">
      {articles.map((a) => (
        <ArticleCard key={a.title} article={a} />
      ))}
    </div>
  );
};

const trimContent = (content: string, limit: number) => {
  return content.length > limit ? content.substring(0, limit - 3) + '...' : content;
};

const ArticleCard = ({ article }: { article: Article }) => {
  const { title, author, publishedDate, summary, tags, url, pip } = article;
  return (
    <Link href={url} rel="noopener noreferrer" target="_blank">
      <Card className="flex flex-col items-center justify-between gap-4 backdrop-blur border-white/10 shadow w-full p-3 cursor-pointer hover:bg-secondary/10 h-[150px]">
        <CardHeader className="w-full p-0 flex flex-col items-start justify-start gap-0 space-y-0">
          <span className=" font-bold">{trimContent(title, 72)}</span>
          <span className="italic text-black/70 mt-0">{trimContent(summary, 80)}</span>
        </CardHeader>
        <CardContent className="flex flex-row justify-between items-end p-0 gap-4 w-full max-h-[320px]">
          <div className="flex gap-4 items-center justify-start">
            <Avatar>
              <AvatarImage src={pip} />
              <AvatarFallback>..</AvatarFallback>
            </Avatar>
            {author}
          </div>
          <div className="flex gap-4 items-center justify-start text-sm italic text-black/50">
            {new Date(publishedDate).toUTCString()}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
