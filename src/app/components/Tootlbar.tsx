type ToolbarProps = {
  children: React.ReactNode;
  action?: React.ReactNode;
};
const Tootlbar = ({ action, children }: ToolbarProps) => {
  return (
    <div className="flex justify-between items-center flex-wrap items-center px-10 py-8">
      {children}
      {action}
    </div>
  );
};

export default Tootlbar;
