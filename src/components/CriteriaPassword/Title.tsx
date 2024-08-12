import { ITitleProps } from "./interface";

import styles from './validator-password.module.scss';

function Title({ children, valid, ...props }: ITitleProps) {
  const classNameValided = valid
    ? `${styles.validator} ${styles['validator--valid']}`
    : `${styles.validator} ${styles['validator--invalid']}`

  return (
    <h4 data-testid="validator__title" className={classNameValided} {...props}>{children}</h4>
  );
}

export default Title;