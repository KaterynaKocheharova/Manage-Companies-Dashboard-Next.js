'use client';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void; // Include the onClose prop
};

const Modal = ({ show, onClose, children }: ModalProps) => {
  return (
    <Transition as={Fragment} show={show}>
      <Dialog onClose={onClose}>HI</Dialog>
    </Transition>
  );
};

export default Modal;
