'use client';
import Header from '../components/Header';
import Tootlbar from '../components/Tootlbar';
import AddCompanyButton from '../components/AddCompanyButton';
import SearchInput from '../components/SearchInput';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRow';
import { Status } from '../components/StatusLabel';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <main>
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
      </main>
    </>
  );
}
