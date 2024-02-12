import { FormPopover } from '@/components/form/form-popover';
import { Hint } from '@/components/hint';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { HelpCircle, User2 } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect('/select-org');
  }

  const boards = await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="w-6 h-6 mr-2" />
        Your boards
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm w-full h-full p-2 overflow-hidden"
          >
            <div className="absolute inset-0 transition bg-black/30 group-hover:bg-black/40" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover side="right" sideOffset={10}>
          <div
            className="flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition aspect-video relative w-full h-full bg-muted rounded-sm"
            role="button"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={`Free Workspaces have up to 5 open boards. For unlimited boards upgrade this workspace`}
            >
              <HelpCircle className="absolute right-2 bottom-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array(8).fill(<Skeleton className="aspect-video h-full w-full p-2" />)}
    </div>
  );
};
