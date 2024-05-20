const ErrorBoundary = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error: boolean;
}) => {
  return error ? <p className="text-red-500 text-xs">{children}</p> : null;
};

export default ErrorBoundary;
