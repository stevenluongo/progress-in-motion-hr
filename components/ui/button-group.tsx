type ButtonGroupProps = React.HTMLProps<HTMLDivElement>;

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div className="flex gap-6 justify-between w-full sm:w-fit">{children}</div>
  );
};

export default ButtonGroup;
