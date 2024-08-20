type ErrorMessageProps = {
  message: string;
  className?: string;
};

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
  return (
    <span role="alert" className={className}>
      {message}
    </span>
  );
};
