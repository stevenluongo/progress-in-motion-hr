type HeaderContainerProps = React.HTMLProps<HTMLDivElement>;

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <div className="flex flex-col gap-2 items-center md:items-start">
      {children}
    </div>
  );
};

export default HeaderContainer;
