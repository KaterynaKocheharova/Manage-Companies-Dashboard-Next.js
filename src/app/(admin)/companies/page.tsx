'use client';
import Tootlbar from '@/app/components/Tootlbar';
import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/SearchInput';
import CompanyTable from '@/app/components/CompanyTable';
import CompanyRow from '@/app/components/CompanyRow';
import { Status } from '@/app/components/StatusLabel';

export default function Page() {
  return (
    <>
      <Tootlbar action={<AddCompanyButton />}>
        <SearchInput />
      </Tootlbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </>
  );
}
