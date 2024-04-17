'use client';
import { Separator, SeparatorProps } from '@radix-ui/react-separator';

interface LabeledSeparatorProps extends SeparatorProps {
  text?: string;
  /**
   * Tailwind classname for the text/label part, not to confused with className prop for the separator
   */
  textClassName?: string;
  /**
   * Tailwind classname for the text/label part, not to confused with className prop for the separator
   */
  separatorClassName?: string;
}

const LabeledSeparator = ({
  text,
  textClassName = '',
  separatorClassName = '',
  className = '',
  ...props
}: LabeledSeparatorProps) => {
  const twClasses = 'flex items-center justify-center w-full gap-2';
  const separatorTwClasses = 'w-full';
  if (!text) return <Separator className={separatorClassName} {...props} />;

  return (
    <div className={[twClasses, className].join(' ')}>
      <Separator className={[separatorTwClasses, separatorClassName].join(' ')} {...props} />
      <span className={textClassName}>{text}</span>
      <Separator className={[separatorTwClasses, separatorClassName].join(' ')} {...props} />
    </div>
  );
};

export { LabeledSeparator };
