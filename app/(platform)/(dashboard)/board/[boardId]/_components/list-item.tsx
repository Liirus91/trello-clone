'use client';

import { ListWithCards } from '@/types';

interface ListItemProps {
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  return <div>List item</div>;
};
