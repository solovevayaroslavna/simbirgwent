import React from 'react';
import { Link, useMatch } from 'react-router-dom';

interface CustomLinksProps {
  to: string,
  children : React.ReactNode,
}

export function CustomLink({ children, to }:CustomLinksProps) {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--color-active)' : 'white',
      }}
    >
      {children}
    </Link>
  );
}
