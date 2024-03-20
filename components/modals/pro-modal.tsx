'use client';

import { useProModal } from '@/hooks/use-pro-modal';
import { Dialog, DialogContent } from '../ui/dialog';
import Image from 'next/image';

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="flex items-center justify-center aspect-video relative">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div>
      </DialogContent>
    </Dialog>
  );
};
