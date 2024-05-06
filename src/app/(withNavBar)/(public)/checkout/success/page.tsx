import PageHeader from '@/components/pageHeader';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const OrderSuccessPage = () => {
  return (
    <div className="relative flex flex-col w-full min-h-[100vh] ">
      <PageHeader title="Successful Order" className="bg-[#D5E5D7]" />
      <div className="w-full h-full grow flex flex-col justify-center items-center gap-6">
        <Label className="text-2xl font-semibold">Thank you for Shopping</Label>
        <Label className="text-gray-500">Your order has been successfully placed and is now being processed.</Label>
        <Link href={'/products'}>
          <Button className="flex gap-2">
            Continue Shopping
            <ChevronRight size={24} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
