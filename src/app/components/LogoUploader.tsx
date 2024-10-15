import Image from 'next/image';

type LogoUploaderProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string;
};

const LogoUploader = ({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) => {
  return (
    <div className="flex gap-5 mb-4">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        className="w-44 h-44 flex flex-col items-center justify-center bg-white border border border-slate-900 rounded-full cursor-pointer"
        htmlFor={id}
      >
        <svg className="mb-1" width="48" height="48">
          <use href="/sprite.svg#icon-cloud-arrow-down"></use>
        </svg>
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          id={id}
          className="hidden"
          accept="image/*"
          type="upload"
          {...rest}
        />
      </label>
    </div>
  );
};

export default LogoUploader;
