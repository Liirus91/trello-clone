'use client';

import { CardWithList } from '@/types';

interface DescriptionProps {
  data: CardWithList;
}

export const Description = ({ data }: DescriptionProps) => {
  return <div>{data.description}</div>;
};
