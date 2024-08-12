import { IMessageProps } from './interface';
import { getClassNameVariant } from './utilsStyles';

function Message({
  children,
  variant,
  ...props }: IMessageProps) {
  const classNameVariant = getClassNameVariant(variant)

  return (
    <span
      data-testid="message"
      className={classNameVariant}
      {...props}
    >
      {children}</span>
  );
}

export default Message;