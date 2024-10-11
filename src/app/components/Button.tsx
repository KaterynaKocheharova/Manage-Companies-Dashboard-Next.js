'use client';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ disabled, children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 font-medium text-center rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
