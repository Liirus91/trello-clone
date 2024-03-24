'use client';

import { Button } from '@/components/ui/button';

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  return (
    <Button variant="primary">
      {isPro ? 'Manage subscription' : 'Upgrade to Pro'}
    </Button>
  );
};
