'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { forwardRef } from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
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
