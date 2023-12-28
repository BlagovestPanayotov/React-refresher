import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const Alert = ({ children }: TextProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
