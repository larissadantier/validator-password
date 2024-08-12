import { MessageVariantsTypes } from "./interface";

import styles from './message.module.scss';

export const getClassNameVariant = (variant?: MessageVariantsTypes) => {
  if (!variant) return `${styles.message}`;

  const hashVariant: Record<Exclude<MessageVariantsTypes, null>, string> = {
    success: `${styles.message} ${styles['message--success']}`,
    error: `${styles.message} ${styles['message--error']}`
  };

  return hashVariant[variant];
}