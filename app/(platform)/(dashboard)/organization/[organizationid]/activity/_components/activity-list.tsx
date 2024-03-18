import { ActivityItem } from '@/components/activity-item';
import { Skeleton } from '@/components/ui/skeleton';
import { db } from '@/lib/db';
import { generateRandomNumber } from '@/lib/generateRandomNumber';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const ActivityList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect('/select-org');
  }

  const auditLogs = await db.auditLog.findMany({
    where: { orgId },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-center text-muted-foreground">
        No activity found inside this organization
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol>
      {[...Array(5)].map((_, index) => (
        <Skeleton
          className={`w-[${generateRandomNumber(50, 5, 6)}%] h-14`}
          key={index}
        />
      ))}
    </ol>
  );
};
