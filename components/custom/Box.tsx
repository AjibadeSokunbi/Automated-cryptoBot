import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  const classStyles = "mx-auto px-2 sm:px-6 lg:px-8 mt-24"
  return (
    <div className={`${classStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Box;