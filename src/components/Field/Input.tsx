import { ComponentProps } from "react";

import styles from './field.module.scss';

function Input({ ...props }: ComponentProps<'input'>) {
  return (
    <input data-testid="field__input" className={styles['field__input']} autoComplete='off' {...props} />
  );
}

export default Input;