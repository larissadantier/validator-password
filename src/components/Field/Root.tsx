import { ComponentProps } from "react";

import styles from './field.module.scss';

function Root({ children, ...props }: ComponentProps<'div'>) {
  return (
    <div data-testid="field" className={styles['field__container']} {...props}>
      {children}
    </div>
  );
}

export default Root;