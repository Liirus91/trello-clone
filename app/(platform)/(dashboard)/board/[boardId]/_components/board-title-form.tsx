'use client';

import { updateBoard } from '@/actions/update-board';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/ui/button';
import { useAction } from '@/hooks/use-action';
import { Board } from '@prisma/client';
import { ElementRef, useRef, useState } from 'react';
import { toast } from 'sonner';

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" updated.`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title, id: data.id });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className="flex items-center gap-x-2"
      >
        <FormInput
          id="title"
          onBlur={onBlur}
          ref={inputRef}
          defaultValue={title}
          classname="bg-transparent h-7 py-1 px-[7px] font-bold text-lg focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      className="h-auto w-auto p-1 px-2 font-bold text-lg"
      variant="transparent"
    >
      {title}
    </Button>
  );
};
