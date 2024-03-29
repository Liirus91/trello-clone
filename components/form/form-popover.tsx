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
import { ElementRef, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useProModal } from '@/hooks/use-pro-modal';

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
  const proModal = useProModal();
  const route = useRouter();
  const closeRef = useRef<ElementRef<'button'>>(null);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success('Board created!');
      closeRef.current?.click();
      route.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
      proModal.onOpen();
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;

    execute({ title, image });
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
        <PopoverClose asChild ref={closeRef}>
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
          <FormSubmit className="w-full">Cretate</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
