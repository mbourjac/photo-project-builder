type ErrorMessageProps = {
  id?: string;
  message: string;
  className?: string;
};

export const ErrorMessage = ({ id, message, className }: ErrorMessageProps) => {
  return (
    <span id={id} role="alert" className={className}>
      {message}
    </span>
  );
};
