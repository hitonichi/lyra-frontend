import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import STRINGS from '@/lib/strings';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Card className="bg-primary/10 backdrop-blur border-white/10 shadow min-w-[50%] max-w-[80%] p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {STRINGS['not-found'].title}
          <Link href="/">
            <Button>{STRINGS['not-found'].return}</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
