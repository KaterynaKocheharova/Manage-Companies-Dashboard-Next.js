'use client';
import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: PageProps) => {
  useEffect(() => {
    const id = Number(parseInt(params.id));
    if (Number.isNaN(id)) {
      notFound();
    }
  });
  return <div>COMPANY</div>;
};

export default Page;
