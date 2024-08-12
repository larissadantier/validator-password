import { ComponentProps } from "react";

function Item({ children, ...props }: ComponentProps<'li'>) {
  return (
    <li data-testid="validator__item" {...props}>{children}</li>
  );
}

export default Item;