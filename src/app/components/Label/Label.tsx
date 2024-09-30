import clsx from 'clsx';
import css from './Label.module.css';

type LabelProps = {
  children: React.ReactNode;
  status: 'active' | 'not-active' | 'pending' | 'suspended';
};

const Label = ({ children, status }: LabelProps) => {
  return <span className={clsx(css.label, css[status])}>{children}</span>;
};

export default Label;
