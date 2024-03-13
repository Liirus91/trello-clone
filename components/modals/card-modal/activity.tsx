'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { AuditLog } from '@prisma/client';

interface ActivityProps {
  items: AuditLog[];
}

export const Activity = ({ items }: ActivityProps) => {
  return <div>Activity</div>;
};

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className="flex items-start w-full gap-x-3">
      <Skeleton className="w-6 h-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-10 bg-neutral-200" />
      </div>
    </div>
  );
};
