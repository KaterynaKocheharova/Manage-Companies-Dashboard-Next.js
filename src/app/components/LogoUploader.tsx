import Image from 'next/image';

type LogoUploaderProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string;
};

// to calculate follow this formula: pixel / 4

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
        <Image
          className="mb-1"
          alt="upload icon"
          src="/sprite.svg#icon-cloud-arrow-dwon"
          width={48}
          height={48}
        />
        {placeholder && <p className="text-base gray-500">{placeholder}</p>}
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
