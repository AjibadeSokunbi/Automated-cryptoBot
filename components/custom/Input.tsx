import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'regular' | 'large';
  width?: string;
  sx?: string;
  roundedLg?: boolean;
}

const Input: React.FC<InputProps> = ({ sx, variant = 'regular', width = '', className = '', roundedLg = true, ...rest}) => {
  let inputClasses =
    'px-2 w-full py-1  border border-gray-700 ' + className;

  if (roundedLg) {
    inputClasses += ' rounded-l-lg';
  }

  switch (variant) {
    case 'small':
      inputClasses += ' text-sm';
      break;
    case 'large':
      inputClasses += ' text-lg';
      break;
    default:
      inputClasses += ' text-base';
      break;
  }

  const style = width ? { width } : {};

  return <input className={`${inputClasses} ${sx}` } style={style} {...rest} />;
};

export default Input;
