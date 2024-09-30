
type StatusLabelProps = {
  children: React.ReactNode;
  status: 'active' | 'not-active' | 'pending' | 'suspended';
};

const StatusLabel = ({ children, status }: StatusLabelProps) => {
  return <span className="">{children}</span>;
};

export default StatusLabel;
