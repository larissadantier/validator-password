import { ComponentProps } from "react";

import styles from './field.module.scss';

function Warn({ children }: ComponentProps<'span'>) {
  return (
    <span data-testid="field__warn" className={styles['field__warn']}>{children}</span>
  );
}

export default Warn;