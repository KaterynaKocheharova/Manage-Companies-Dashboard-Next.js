import clsx from 'clsx';
import css from './Label.module.css';

type ActiveLabelProps = {
  children: React.ReactNode;
  status: 'active' | 'not-active' | 'pending' | 'suspended';
};

const ActiveLabel = ({ children, status }: ActiveLabelProps) => {
  return <div className={clsx(css.active, css[status])}>{children}</div>;
};

export default ActiveLabel;
