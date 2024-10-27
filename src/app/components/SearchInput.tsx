import React from 'react';

type SeacrhInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchInput = ({ onSearchClick, ...rest }: SeacrhInputProps) => {
  return (
    <div className="relative w-96">
      <input
        placeholder="Search..."
        type="text"
        className="w-full p-3 pr-10 border border-gray-300 rounded bg-gray-50 text-sm placeholder:text-sm placeholder:text-slate-500"
        {...rest}
      />
      <button
        type="button"
        onClick={onSearchClick}
        className="absolute top-0 right-0 p-3"
      >
        <svg className="w-5 h-5">
          <use href="/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
