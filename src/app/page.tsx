'use client'
import { useState } from 'react';
import StatusLabel from './components/StatusLabel';
import { Status } from './components/StatusLabel';
import { headers } from 'next/headers';
import CompanyForm from './components/CompanyForm';
import Modal from './components/Modal';

export default function Home() {
  const [show, setShow] = useState(true);
  return (
    <main className="p-10">
      <Modal show={show} onClose={() => setShow(false)}>
        Modal
      </Modal>
      {/* <h1 className="text-xl">{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      {/* <CompanyForm /> */}
    </main>
  );
}
