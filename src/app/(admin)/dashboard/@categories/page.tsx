import React from 'react';
import { getSummaryCategories } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/StatCard/StatCard';
import DashboardCard from '@/app/components/DashboardCard';


export default async function Page() {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}