'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteBoard(id: string) {
  await db.board.delete({ where: { id } });

  //TODO change it!
  revalidatePath('/organization/org_2Z71JZByVFwx3YvqfRLmoDjHHZV');
}
