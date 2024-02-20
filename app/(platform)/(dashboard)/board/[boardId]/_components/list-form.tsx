'use client';

import { Plus } from 'lucide-react';
import { ListWrapper } from './list-wrapper';

export const ListForm = () => {
  return (
    <ListWrapper>
      <button className="flex items-center font-medium text-sm p-3 w-full transition rounded-md bg-white/80 hover:bg-white/50 ">
        <Plus className="h-4 w-4 mr-2" />
        Add list
      </button>
    </ListWrapper>
  );
};
