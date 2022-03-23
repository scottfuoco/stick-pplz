import { ReactElement } from 'react';
import { ImSpinner6 } from 'react-icons/im';

type Props = {
  onClick: () => void;
  children: ReactElement;

  isLoading?: Boolean;
  type?: 'button' | 'submit';
}

export const Button = ({
  onClick, isLoading = false, children, type = 'button',
}: Props) => {
  let content = children;
  if (isLoading) content = <ImSpinner6 className="animate-spin" />;

  return <button className="btn btn-blue" type={type} onClick={onClick}>{content}</button>;
};
