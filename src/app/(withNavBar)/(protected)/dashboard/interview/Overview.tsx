import PieChart from '@/components/PieChart';
import { ProblemProgressData, ProblemSubmission, SubmissionHistoryData } from './actions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface OverviewProps {
  problemProgressData: ProblemProgressData;
  submissionHistory: SubmissionHistoryData;
}

export default function Overview({ problemProgressData, submissionHistory }: OverviewProps) {
  return (
    <div className="flex justify-between gap-4">
      <ProblemProgressCard problemProgressData={problemProgressData} />
      <SubmissionHistoryCard submissionHistory={submissionHistory} />
    </div>
  );
}

const ProblemProgressCard = ({ problemProgressData }: { problemProgressData: ProblemProgressData }) => {
  const { easySolved, mediumSolved, hardSolved, solvedProblem } = problemProgressData;
  return (
    <Card className=" backdrop-blur border-white/10 shadow max-w-[40%] w-fit h-fit shrink-0">
      <CardHeader className="pb-4">
        <span className="text-xl font-bold">Problems solved</span>
      </CardHeader>
      <CardContent className="flex items-center justify-start gap-4 p-6">
        <div className="max-w-[160px] max-h-[160px]">
          <PieChart
            data={[
              {
                title: 'Easy',
                value: easySolved / solvedProblem,
                color: '#02b8a3',
              },
              { title: 'Medium', value: mediumSolved / solvedProblem, color: '#ffc030' },
              { title: 'Hard', value: hardSolved / solvedProblem, color: '#ef4743' },
            ]}
          />
        </div>
        <div className="ml-4 flex flex-col justify-start items-start self-stretch">
          <div className="w-full flex items-center gap-2 justify-between">
            <span className="font-bold">Easy: </span>
            <span>{easySolved}</span>
          </div>
          <div className="w-full flex items-center gap-2 justify-between">
            <span className="font-bold">Medium: </span>
            <span>{mediumSolved}</span>
          </div>
          <div className="w-full flex items-center gap-2 justify-between">
            <span className="font-bold">Hard: </span>
            <span>{hardSolved}</span>
          </div>
          <Separator className=" text-black bg-black" />
          <div className="w-full flex items-center gap-2 justify-between">
            <span className="font-bold">Total: </span>
            <span className="font-bold">{solvedProblem}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SubmissionHistoryCard = ({ submissionHistory }: { submissionHistory: SubmissionHistoryData }) => {
  return (
    <Card className=" backdrop-blur border-white/10 shadow w-full ">
      <CardHeader className="pb-4">
        <span className="text-xl font-bold">Recent Accepted Submissions</span>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start gap-4 p-6 max-h-[320px] overflow-y-scroll">
        {submissionHistory.submission.map((submission) => (
          <SubmissionInfo key={`sub--${submission.timestamp}`} submission={submission} />
        ))}
      </CardContent>
    </Card>
  );
};

const SubmissionInfo = ({ submission }: { submission: ProblemSubmission }) => {
  const { title, timestamp, statusDisplay, lang } = submission;
  const time = new Date(parseInt(timestamp));
  return (
    <div className="w-full border rounded-lg py-3 px-4 bg-white space-y-2">
      <div className="flex justify-between">
        <p className="truncate font-bold max-w-[480px]">{title}</p>
        <span className="italic">{time.toUTCString()}</span>
      </div>
      <div className="flex justify-between">
        <Badge variant="default">{lang}</Badge>
        <Badge variant="default" className="bg-green-500">
          {statusDisplay}
        </Badge>
      </div>
    </div>
  );
};
