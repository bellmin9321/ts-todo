import React, { FC, ForwardedRef, forwardRef } from 'react';
import { InputProps } from '../../types';

const InputInner = (
  { type, placeholder, className, onChange, onKeyDown, value }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      ref={ref}
    />
  );
};

export const Input = forwardRef(InputInner);
