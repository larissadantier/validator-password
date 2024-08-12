import { ComponentProps } from "react";

import styles from './validator-password.module.scss';

function List({ children, ...props }: ComponentProps<'ul'>) {
  return (
    <ul data-testid="validator__list" className={styles['validator__list']} {...props}>{children}</ul>
  );
}

export default List;