'use client';

import { Button } from '@/components/ui/button';
import { Board } from '@prisma/client';

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  return (
    <Button
      className="h-auto w-auto p-1 px-2 font-bold text-lg"
      variant="transparent"
    >
      {data.title}
    </Button>
  );
};
