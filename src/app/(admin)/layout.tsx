import React from 'react';
import Sidebar from '../components/Sidebar';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  console.log('rendering');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
