'use client';

import { deleteList } from '@/actions/delete-list';
import { FormSubmit } from '@/components/form/form-submit';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useAction } from '@/hooks/use-action';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';
import { ElementRef, useRef } from 'react';
import { toast } from 'sonner';

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<'button'>>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" deleted`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = (formData: FormData) => {
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    executeDelete({ id, boardId });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-auto h-auto p-2" variant="ghost">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" className="px-0 pt-3 pb-3">
        <div className="text-sm font-medium text-center pb-4 text-neutral-600">
          List actions
        </div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            variant="ghost"
            className="w-auto h-auto p-2 absolute top-2 right-2 text-neutral-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          variant="ghost"
          className="h-auto w-auto rounded-none p-2 px-5 justify-start font-normal text-sm"
        >
          Add card...
        </Button>
        <form>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            variant="ghost"
            className="h-auto w-auto rounded-none p-2 px-5 justify-start font-normal text-sm"
          >
            Copy list...
          </FormSubmit>
        </form>
        <Separator />
        <form action={onDelete}>
          <input hidden name="id" id="id" value={data.id} />
          <input hidden name="boardId" id="boardId" value={data.boardId} />
          <FormSubmit
            variant="ghost"
            className="h-auto w-auto rounded-none p-2 px-5 justify-start font-normal text-sm"
          >
            Delete list...
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
