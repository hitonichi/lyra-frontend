import { Card, CardContent, CardHeader } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Progress } from '../ui/progress';
import { itvQuestions } from './mocks';

const MOCK_ROADMAP = [
  {
    name: 'Front-end Developer',
    count: 0,
    total: 24,
  },
  {
    name: 'Back-end Developer',
    count: 1,
    total: 23,
  },
];

interface Roadmap {
  name: string;
  count: number;
  total: number;
}

export default function Roadmaps() {
  return (
    <Carousel className="w-full mt-1">
      <CarouselContent className="mx-auto justify-center gap-4">
        {MOCK_ROADMAP.map((rm, idx) => (
          <RoadmapItem key={idx} rm={rm} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-8 w-8 left-0" />
      <CarouselNext className="h-8 w-8 right-0" />
    </Carousel>
  );
}

const RoadmapItem = ({ rm }: { rm: Roadmap }) => {
  return (
    <Card>
      <CardHeader>
        <span className="font-bold">{rm.name}</span>
      </CardHeader>
      <CardContent>
        <span>
          {rm.count} / {rm.total}
        </span>
        <Progress className="bg-black/30" value={Math.round(100 * (rm.count / rm.total))} />
      </CardContent>
    </Card>
  );
};
