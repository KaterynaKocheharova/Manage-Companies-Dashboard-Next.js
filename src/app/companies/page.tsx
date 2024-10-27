'use client';
import Header from '../components/Header';
import Tootlbar from '../components/Tootlbar';
import AddCompanyButton from '../components/AddCompanyButton';
import SearchInput from '../components/SearchInput';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Tootlbar action={<AddCompanyButton />}>
          <SearchInput />
        </Tootlbar>
      </main>
    </>
  );
}
