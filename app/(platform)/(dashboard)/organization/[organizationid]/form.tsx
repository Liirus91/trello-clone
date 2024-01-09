'use client';

import { create } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
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
