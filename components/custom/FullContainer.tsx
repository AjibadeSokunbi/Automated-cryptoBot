"use client"
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface FullContainerProps {
  children: ReactNode;
  className?: string;
}

const FullContainer: React.FC<FullContainerProps> = ({ children, className }) => {
  const pathname = usePathname();
  const hidden = pathname === "/login" || pathname === "/register";
  const classStyles = !hidden ? "md:ml-16 " : " "
  return (
    <div className={`${classStyles} ${className}`}>
      {children}
    </div>
  );
};

export default FullContainer;