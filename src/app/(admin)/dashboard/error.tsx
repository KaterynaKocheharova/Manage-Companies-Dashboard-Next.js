'use client';

type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <p>{`Something went wrong: ${error.message}`}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorComponent;
