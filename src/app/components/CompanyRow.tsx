'use client';

import { Status } from './StatusLabel';
import StatusLabel from './StatusLabel';
import Image from 'next/image';
import clsx from 'clsx';

export type CompanyRowProps = {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
};

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not Active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

const CompanyRow = ({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) => {
  return (
    <tr className="h-14 w-full bg-white text-center text-gray-900">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {category}
      </td>
      <td>
        <a href={`companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex gap-2 items-center">
          <Image
            width={16}
            height={16}
            alt="promotion icon"
            src={`/images/${promotion ? 'check.png' : 'cross.png'}`}
          />
          <p
            className={clsx(
              'text-sm font-medium',
              promotion ? 'text-green-700' : 'text-red-700'
            )}
          >
            {promotion ? 'Yes' : 'No'}
          </p>
        </div>
      </td>
      <td>{country}</td>
      <td>{joinedDate}</td>
    </tr>
  );
};

export default CompanyRow;
