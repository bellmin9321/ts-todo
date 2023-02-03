import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from '../../types';

const InputInner = (
  {
    type,
    placeholder,
    autoFocus,
    className,
    onChange,
    onKeyDown,
    onClick,
    defaultValue,
    value,
    name,
    defaultChecked,
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement | null>,
) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={className}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      defaultValue={defaultValue}
      value={value}
      name={name}
      defaultChecked={defaultChecked}
      ref={ref}
    />
  );
};

export const Input = forwardRef(InputInner);
