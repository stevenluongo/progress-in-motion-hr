import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import InputWrapper from "./input-wrapper";
import InputBase from "./input-base";
import ErrorBoundary from "./error-boundary";
import TextArea from "./textarea";

type FormTextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  error?: FieldError | undefined;
  children: React.ReactNode;
  icon: IconProp;
  ref?: React.Ref<HTMLTextAreaElement>;
};

const FormTextAreaComponent = forwardRef<
  HTMLTextAreaElement,
  FormTextAreaProps
>(({ error, children, icon, ...props }, ref) => {
  return (
    <InputWrapper>
      {Array.isArray(children) ? children[0] : children}
      <InputBase icon={icon}>
        <TextArea isError={Boolean(error)} ref={ref} {...props} />
      </InputBase>
      <ErrorBoundary error={Boolean(error)}>{error?.message}</ErrorBoundary>
    </InputWrapper>
  );
});

FormTextAreaComponent.displayName = "FormTextArea";

// Need to extend the interface to include the Label component
interface ExtendedFormTextAreaComponent
  extends React.ForwardRefExoticComponent<
    FormTextAreaProps & React.RefAttributes<HTMLInputElement>
  > {
  Label: (props: FormTextAreaLabelProps) => JSX.Element;
}

// Cast component to the extended interface
const FormTextArea = FormTextAreaComponent as ExtendedFormTextAreaComponent;

export default FormTextArea;

type FormTextAreaLabelProps = {
  children: React.ReactNode;
};

const FormTextAreaLabel = ({ children }: FormTextAreaLabelProps) => {
  return (
    <p className="font-nunito text-sm 2xl:text-base leading-normal">
      {children}
    </p>
  );
};

FormTextAreaLabel.displayName = "FormTextArea.Label";

FormTextArea.Label = FormTextAreaLabel;
