'use client';

import { X } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { FormInput } from './form-input';
import { FormSubmit } from './form-submit';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board';
import { toast } from 'sonner';
import { FormPicker } from './form-picker';

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
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log({ data });
      toast.success('Board created!');
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };
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
        <form className="space-y-4" action={onSubmit}>
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={fieldErrors}
            />
          </div>
          <FormSubmit classname="w-full">Cretate</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
