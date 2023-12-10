type FeaturesGroupProps = React.HTMLProps<HTMLDivElement>;

const FeaturesGroup = ({ children }: FeaturesGroupProps) => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-y-4 md:gap-y-0 lg:gap-y-4 xs:justify-center md:justify-start gap-x-8 w-full md:w-fit">
      {children}
    </div>
  );
};

export default FeaturesGroup;
