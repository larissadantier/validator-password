import { ComponentProps } from "react";

function Label({ children, ...props }: ComponentProps<'label'>) {
  return (
    <label data-testid="field__label" {...props}>{children}</label>
  );
}

export default Label;