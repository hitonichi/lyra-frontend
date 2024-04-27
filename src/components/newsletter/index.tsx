import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const Newsletter = () => {
  return (
    <div className="w-full h-[200px] bg-accent py-16 px-40 flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <Label className="text-2xl font-bold">Join Our Newsletter</Label>
        <Label className="text-gray-500">We love to surprise our subscribers with occasional gifts.</Label>
      </div>
      <div className="flex gap-4 ">
        <Input className="min-w-[300px]" placeholder="Your email address" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
