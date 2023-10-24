import React, { ReactNode } from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'normal' | 'thin' | 'extralight' | 'light' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
  className?: string;
  children: ReactNode;
  size?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  align?: string;
  sx?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({size, variant = 'body1', color = 'inherit', className = '', children, onClick, align, sx }) => {
  const getClassNames = (): string => {
    let classNames = 'text-gray-800';
    switch (variant) {
      case 'h1':
        classNames += ' text-4xl font-bold';
        break;
      case 'h2':
        classNames += ' text-3xl font-bold';
        break;
      case 'h3':
        classNames += ' text-2xl font-bold';
        break;
      case 'h4':
        classNames += ' text-xl font-bold';
        break;
      case 'h5':
        classNames += ' text-lg font-bold';
        break;
      case 'h6':
        classNames += ' text-base font-bold';
        break;
      case 'subtitle1':
        classNames += ' text-lg';
        break;
      case 'subtitle2':
        classNames += ' text-base';
        break;
      case 'body1':
        classNames += ' text-base';
        break;
      case 'body2':
        classNames += ' text-sm';
        break;
      case 'caption':
        classNames += ' text-xs';
        break;
      case 'overline':
        classNames += ' uppercase tracking-wide text-xs';
        break;
      case 'normal':
        classNames += ' font-normal';
        break;
      case 'thin':
        classNames += ' font-thin';
        break;
      case 'extralight':
        classNames += ' font-extralight';
        break;
      case 'light':
        classNames += ' font-light';
        break;
      case 'medium':
        classNames += ' font-medium';
        break;
      case 'semibold':
        classNames += ' font-semibold';
        break;
      case 'bold':
        classNames += ' font-bold';
        break;
      case 'extrabold':
        classNames += ' font-extrabold';
        break;
      case 'black':
        classNames += ' font-black';
        break;
      default:
        break;
    }
    return classNames;
  };

  const combinedStyles = { color, ...sx };

  return (
    <div  style={combinedStyles} className={`${getClassNames()} text-${align} ${className} text-[${size}px]`}  onClick={onClick}>
      {children}
    </div>
  );
};

export default Typography;
