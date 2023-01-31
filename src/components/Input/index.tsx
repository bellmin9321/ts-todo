import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from '../../types';

const InputInner = (
  {
    type,
    placeholder,
    className,
    onChange,
    onKeyDown,
    onClick,
    value,
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      value={value}
      ref={ref}
    />
  );
};

export const Input = forwardRef(InputInner);
