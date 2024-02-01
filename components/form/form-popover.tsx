'use client';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface FormPopoverProps {
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'center' | 'start' | 'end';
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = 'bottom',
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className="pt-3 w-80"
      >
        <div className="text-center text-sm font-medium pb-4 text-neutral-600">
          Create board
        </div>
      </PopoverContent>
    </Popover>
  );
};
