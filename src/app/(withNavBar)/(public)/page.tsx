import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-0 justify-center items-center">
        <NewArrival />
        <div className="w-full">Feature section</div>
      </div>
    </>
  );
}

const NewArrival = () => {
  return (
    <div className="w-full bg-gray-100 relative flex items-center justify-start pl-20 min-h-[480px]">
      <div className="flex flex-col gap-2 justify-start items-start">
        <Label className="text-2xl font-bold">Fresh Arrivals Online</Label>
        <span>Discover Our Newest Collection Today.</span>
        <Button className="mt-8">
          <Link href="/products">View Collection</Link>
          <ChevronRight size={24} />
        </Button>
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
