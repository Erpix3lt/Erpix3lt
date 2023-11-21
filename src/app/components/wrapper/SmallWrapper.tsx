// components/SmallWrapper.tsx
import React, { ReactNode } from 'react';

interface SmallWrapperProps {
  children: ReactNode;
}

const SmallWrapper: React.FC<SmallWrapperProps> = ({ children }) => {
  return (
    <div className="border border-gray-500 rounded-lg max-w-fit hover:shadow-blue transition-all duration-1000 ease-in-out cursor-pointer">
      {children}
    </div>
  );
};

export default SmallWrapper;
