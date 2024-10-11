type LogoUploaderProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string;
};

// to calculate width follow this formula: pixel / 4

const LogoUploader = ({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) => {
  return (
    <div className="flex gap-5 mb-4">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label className="w-44 h-44" htmlFor={id}>

      </label>
    </div>
  );
};

export default LogoUploader;
