import { ITextProps } from "./interface";

import styles from './validator-password.module.scss';

function Text({ children, valid, ...props }: ITextProps) {
  const classNameValided = valid
    ? `${styles.validator} ${styles['validator--valid']}`
    : `${styles.validator} ${styles['validator--invalid']}`

  return (
    <span data-testid="validator__text" className={classNameValided} {...props}>
      - {children}
    </span>
  );
}

export default Text;