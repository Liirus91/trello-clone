'use client';

import { FormInput } from '@/components/form/form-input';
import { Skeleton } from '@/components/ui/skeleton';
import { CardWithList } from '@/types';
import { Layout } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  data: CardWithList;
}

export const Header = ({ data }: HeaderProps) => {
  const [title, setTitle] = useState(data.title);

  return (
    <div className="flex items-start gap-x-3 mb-6 w-full">
      <Layout className="w-5 h-5 mt-1 text-neutral-700" />
      <div className="w-full">
        <form>
          <FormInput
            id="title"
            classname="text-xl px-1 text-neutral-700 font-semibold bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-0.5 truncate"
            defaultValue={title}
          />
        </form>
      </div>
    </div>
  );
};

Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className="flex items-start gap-x-3 mb-6">
      <Skeleton className="w-6 h-6 mt-1 bg-neutral-200" />
      <div>
        <Skeleton className="h-6 w-24 mb-1 bg-neutral-200" />
        <Skeleton className="h-6 w-12 bg-neutral-200" />
      </div>
    </div>
  );
};
