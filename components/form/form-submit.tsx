'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface FormSubmitProps {
  children: React.ReactNode;
  disabled?: boolean;
  classname?: string;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'primary';
}

export const FormSubmit = ({
  children,
  disabled,
  classname,
  variant,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn(classname)}
      disabled={pending || disabled}
      type="submit"
      size="sm"
      variant={variant}
    >
      {children}
    </Button>
  );
};
