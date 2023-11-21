// components/GreenLink.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface GreenLinkProps {
  href: string;
  children: ReactNode;
}

const GreenLink: React.FC<GreenLinkProps> = ({ href, children }) => {
  return (
    <Link className='text-green-300 hover:text-fuchsia-300 underline' href={href}>
      {children}
    </Link>
  );
};

export default GreenLink;
