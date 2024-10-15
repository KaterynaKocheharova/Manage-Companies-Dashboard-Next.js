'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import Button from './Button';
import InputField from './InputField';
import LogoUploader from './LogoUploader';

export type CompanyFieldValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

const onSubmit = (values: CompanyFieldValues) => {
  console.log(values);
};

const CompanyForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <Form className="flex flex-col gap-10 justify-between" onSubmit={handleSubmit}>
          <p className="text-xl font-semibold">Add new company</p>
          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col flex-1 gap-5">
              <LogoUploader label="Logo" placeholder="Upload a photo" />
              <InputField label="Status" placeholder="title" name="status" />
              <InputField
                label="Country"
                placeholder="Country"
                name="country"
              />
            </div>
            <div className="flex flex-col flex-1 gap-5 justify-between">
              <InputField label="Name" placeholder="Name" name="name" />
              <InputField
                label="Category"
                placeholder="Category"
                name="category"
              />
              <InputField label="Joined date" type="date" name="date" />
              <InputField
                label="Description"
                placeholder="Description"
                name="description"
              />
            </div>
          </div>
          <Button type="submit">Add company</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyForm;
