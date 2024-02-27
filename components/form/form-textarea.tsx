'use client';

import { KeyboardEventHandler, forwardRef } from 'react';
import { Label } from '../ui/label';

interface FormTextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]> | undefined;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  defaultValue?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onKeyDown,
      defaultValue,
    },
    ref
  ) => {
    return (
      <div className="w-full space-y-2">
        <div className="w-full space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
        </div>
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
