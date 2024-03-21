'use client';

import { useProModal } from '@/hooks/use-pro-modal';
import { Dialog, DialogContent } from '../ui/dialog';
import Image from 'next/image';
import { Button } from '../ui/button';

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="flex items-center justify-center aspect-video relative">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="text-xl font-semibold">
            Upgrade to TrelloClone Pro today!
          </h2>
          <p className="text-xs font-semibold">
            Explore the best of TrelloClone
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited boards</li>
              <li>Advanced cheklists</li>
              <li>Admin and security features</li>
              <li>And more!</li>
            </ul>
          </div>
          <Button className="w-full" variant="primary">
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
