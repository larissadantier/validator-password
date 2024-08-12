import { ComponentProps } from "react";

export interface IMessageProps extends ComponentProps<'span'> {
  variant?: MessageVariantsTypes
}

export type MessageVariantsTypes = 'success' | 'error' | null;