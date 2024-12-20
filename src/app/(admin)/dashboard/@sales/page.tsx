import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/SummaryTable';
import SummaryTableHeader from '@/app/components/SummaryTableHeader';
import SummaryTableCell from '@/app/components/SummaryTableCell';
import DashboardCard from '@/app/components/DashboardCard';
import MagicButton from '@/app/components/MagicButton';

export default async function page() {
  const data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 4000);
  });

  // label="Sales details"

  return (
    <DashboardCard
      label={
        <>
          Sales details <MagicButton>Generate error</MagicButton>
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
