import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import InputWrapper from "./input-wrapper";
import InputBase from "./input-base";
import Input from "./input";
import ErrorBoundary from "./error-boundary";

type FormInputProps = React.HTMLProps<HTMLInputElement> & {
  error?: FieldError | undefined;
  children: React.ReactNode;
  placeholder?: string;
  icon: IconProp;
  ref?: React.Ref<HTMLInputElement>;
};

const FormInputComponent = forwardRef<HTMLInputElement, FormInputProps>(
  (
    { error, children, placeholder = "", type = "text", icon, ...props },
    ref
  ) => {
    return (
      <InputWrapper>
        {children}
        <InputBase icon={icon}>
          <Input
            isError={Boolean(error)}
            placeholder={placeholder}
            type={type}
            ref={ref}
            {...props}
          />
        </InputBase>
        <ErrorBoundary error={Boolean(error)}>{error?.message}</ErrorBoundary>
      </InputWrapper>
    );
  }
);

FormInputComponent.displayName = "FormInput";

// Need to extend the interface to include the Label component
interface ExtendedFormInputComponent
  extends React.ForwardRefExoticComponent<
    FormInputProps & React.RefAttributes<HTMLInputElement>
  > {
  Label: (props: FormInputLabelProps) => JSX.Element;
}

// Cast component to the extended interface
const FormInput = FormInputComponent as ExtendedFormInputComponent;

export default FormInput;

type FormInputLabelProps = {
  children: React.ReactNode;
};

const FormInputLabel = ({ children }: FormInputLabelProps) => {
  return (
    <p className="font-nunito text-sm 2xl:text-base leading-normal">
      {children}
    </p>
  );
};

FormInputLabel.displayName = "FormInput.Label";

FormInput.Label = FormInputLabel;
