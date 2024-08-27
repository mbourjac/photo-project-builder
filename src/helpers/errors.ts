export const getErrorMessage = (error: unknown, defaultMessage?: string) => {
  switch (true) {
    case error instanceof Error:
      return error.message;
    case error && typeof error === 'object' && 'message' in error:
      return String(error.message);
    case typeof error === 'string':
      return error;
    default:
      return defaultMessage ?? 'Something went wrong. Please try again later.';
  }
};
