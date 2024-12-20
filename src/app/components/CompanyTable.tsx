type CompanyTableProps = {
  children?: React.ReactNode;
};

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const CompanyTable = ({ children }: CompanyTableProps) => {
  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th className="pb-5 text-sm font-light text-gray-900" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
