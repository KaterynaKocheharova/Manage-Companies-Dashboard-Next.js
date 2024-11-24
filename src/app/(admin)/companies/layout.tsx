import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  //   toolbar: React.ReactNode;
  modal: React.ReactNode;
}

export default function layout({
  children,
  header,
  modal,
}: //   toolbar,

LayoutProps) {
  return (
    <>
      {modal}
      {header}
      <main>
        {/* {toolbar} */}
        {children}
      </main>
    </>
  );
}
