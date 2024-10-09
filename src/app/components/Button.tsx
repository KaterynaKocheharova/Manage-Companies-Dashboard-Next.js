import clsx from "clsx";

type ButtonProps = Partial<React.HTMLProps<HTMLButtonElement>> & {
  disabled?: boolean;
};

const Button = ({disabled, ...rest}) => {
  return <button {...rest} className={clsx("py-2.5 px-5 bg-gray-900 text-zin-50 font-medium text-center rounded",
    !disabled && "hover:bg-gray-800 active:bg-gray-950",
    disabled && "text-zinc-100"
  )}></button>;
};

export default Button;
