import STRINGS from '@/lib/strings';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const S = STRINGS.homepage.newArrival;
const NewArrival = () => {
  return (
    <div className="w-full bg-gray-100 relative flex items-center justify-start pl-20 min-h-[480px]">
      <div className="flex flex-col gap-2 justify-start items-start">
        <Label className="text-2xl font-bold">{S.title}</Label>
        <span>{S.subTitle}</span>
        <Link href="/products">
          <Button className="mt-8">
            {S.callToAction}
            <ChevronRight size={24} />
          </Button>
        </Link>
        <Image
          className="absolute bottom-0 right-40"
          width={360}
          height={360}
          src="/new-arrival-img.png"
          alt="new-arrival-products"
        />
      </div>
    </div>
  );
};

export default NewArrival;
