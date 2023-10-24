import React, { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
const classStyles = "mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-[100px] md:mb-[240px] lg:mb-[240px"
  return (
    <div className={`${classStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
