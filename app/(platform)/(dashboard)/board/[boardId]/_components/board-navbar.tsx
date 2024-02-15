import { Board } from '@prisma/client';
import { BoardTitleForm } from './board-title-form';

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="flex items-center px-6 gap-x-4 text-white top-14 fixed w-full h-14 z-[40] bg-black/50">
      <BoardTitleForm data={data} />
    </div>
  );
};
