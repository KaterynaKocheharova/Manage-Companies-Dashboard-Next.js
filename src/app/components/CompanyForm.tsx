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
        <Form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          {/* Add your input fields here */}

          <p>Add new company</p>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyForm;
