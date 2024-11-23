import React from 'react';
import { getSummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import Link from 'next/link';

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function page() {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => {
        return (
          <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
            <StatCard
              type={StatCardType.Gradient}
              label={labelByStat[key]}
              counter={data[key]}
            />
          </Link>
        );
      })}
    </div>
  );
}
