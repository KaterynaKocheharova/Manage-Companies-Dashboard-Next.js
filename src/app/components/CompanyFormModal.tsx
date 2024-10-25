'use client';

import Modal, { type ModalProps } from './Modal';
import CompanyForm, { type CompanyFormProps } from './CompanyForm';

type CompanyFormModal = Omit<ModalProps, 'children'> & CompanyFormProps;

const CompanyFormModal = ({ onSubmit, ...rest }: CompanyFormModal) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
