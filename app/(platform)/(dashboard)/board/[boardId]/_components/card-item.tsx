'use client';

import { Card } from '@prisma/client';

interface CardItemProps {
  index: number;
  data: Card;
}

export const CardItem = ({ index, data }: CardItemProps) => {
  return <div>Card item</div>;
};
