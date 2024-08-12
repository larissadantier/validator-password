import { ComponentProps } from "react";

import styles from './button.module.scss';

function Text({ children, ...props }: ComponentProps<'span'>) {
  return (
    <span className={styles['button__text']} {...props}>{children}</span>
  );
}

export default Text;