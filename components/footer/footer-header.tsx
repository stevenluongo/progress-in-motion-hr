type FooterHeaderProps = {
  children: React.ReactNode;
};

const FooterHeader: React.FC<FooterHeaderProps> = ({ children }) => {
  return (
    <p className="text-white uppercase tracking-[2px] font-extralight">
      {children}
    </p>
  );
};

export default FooterHeader;
