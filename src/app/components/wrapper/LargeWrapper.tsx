// components/LargeWrapper.tsx
import React, { ReactNode } from 'react';

interface LargeWrapperProps {
  children: ReactNode;
}

const LargeWrapper: React.FC<LargeWrapperProps> = ({ children }) => {
  return (
    <div className="border border-gray-600 rounded-full max-w-fit p-0 hover:shadow-fuchsia transition-all duration-1000 ease-in-out cursor-pointer">
      {children}
    </div>
  );
};

export default LargeWrapper;
