import * as React from 'react';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, startIcon, ...props }, ref) => {
  const StartIcon = startIcon;

  return (
    <div className="w-full relative">
      <input
        type={type}
        className={cn(
          'peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          startIcon ? 'pl-8' : '',
          className,
        )}
        ref={ref}
        {...props}
      />
      {StartIcon && (
        <StartIcon
          size={18}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground peer-focus:text-black"
        />
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
