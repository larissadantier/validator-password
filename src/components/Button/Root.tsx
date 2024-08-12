import { ComponentProps } from "react";

import styles from './button.module.scss';

function Root({ children, className, ...props }: ComponentProps<'button'>) {
  return (
    <button data-testid="button" className={`${styles['button__container']} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Root;