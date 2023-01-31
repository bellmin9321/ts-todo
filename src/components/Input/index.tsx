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
    defaultValue,
    value,
    defaultChecked,
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
      defaultValue={defaultValue}
      value={value}
      defaultChecked={defaultChecked}
      ref={ref}
    />
  );
};

export const Input = forwardRef(InputInner);
