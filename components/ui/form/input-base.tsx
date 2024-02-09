import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputBaseProps = {
  icon: IconProp;
  children: React.ReactNode;
};

const InputBase: React.FC<InputBaseProps> = ({ icon, children }) => {
  return (
    <div className="relative">
      <FontAwesomeIcon
        id="menu-button"
        icon={icon}
        style={{ width: 16, height: 16, color: "#737373" }}
        className="absolute inset-y-[13px] start-0 ps-3.5 pointer-events-none"
      />
      {children}
    </div>
  );
};

export default InputBase;
