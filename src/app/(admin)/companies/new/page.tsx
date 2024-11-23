"use client";
import CompanyForm from '@/app/components/CompanyForm';

const page = () => {
  return <CompanyForm onSubmit={() => console.log('Submitting new company')} />;
};

export default page;
