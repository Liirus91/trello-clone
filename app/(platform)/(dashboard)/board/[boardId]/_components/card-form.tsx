'use client';

import { FormSubmit } from '@/components/form/form-submit';
import { FormTextarea } from '@/components/form/form-textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { forwardRef } from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    if (isEditing) {
      return (
        <form className="py-0.5 px-1 m-1 space-y-4">
          <FormTextarea
            id="title"
            ref={ref}
            onKeyDown={() => {}}
            placeholder="Enter a title for this card..."
          />
          <input hidden id="listId" name="listId" value={listId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add card</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </form>
      );
    }

    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          size="sm"
          variant="ghost"
          className="h-auto w-full px-2 py-1.5 justify-start text-muted-foreground text-sm"
        >
          <Plus className="mr-2 w-4 h-4" />
          Add card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = 'CardForm';
