import { ComponentProps } from "react";

export interface ITextProps extends ComponentProps<'span'> {
  valid?: boolean
}

export interface ITitleProps extends ComponentProps<'h4'> {
  valid?: boolean
}