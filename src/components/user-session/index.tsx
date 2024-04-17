import { Session } from 'next-auth';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { signOut } from '@/auth';

export default function UserSessionDisplay({ session }: { session: Session }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-row items-center justify-between gap-3 cursor-pointer p-1 rounded-md">
          <p>{session.user?.name}</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt={session.user?.name ?? ''} />
            <AvatarFallback>X</AvatarFallback>
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end">
        <p className="text-lg font-bold">{session.user?.name}</p>
        <p className="text-md text-muted-foreground">{session.user?.email}</p>
        <Separator className="my-4" />
        <div className="w-full flex items-center justify-end">
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          >
            <Button>Log out</Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
