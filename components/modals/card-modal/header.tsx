'use client';

import { CardWithList } from '@/types';

interface HeaderProps {
  data: CardWithList | undefined;
}

export const Header = ({ data }: HeaderProps) => {
  return <div>Header</div>;
};
