'use client';

import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';

export const Form = () => {
  return (
    <form action={create}>
      <input
        id="title"
        placeholder="Enter a board title"
        name="title"
        required
        className="border p-1 border-black"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
