'use client';

import { X } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';

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
        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="p-2 h-auto w-auto absolute top-2 right-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
