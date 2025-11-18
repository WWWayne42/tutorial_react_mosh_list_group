import { type ReactNode } from "react";

// children 是特殊的 prop，所有的组件都可以接收
interface AlertProps {
  children: ReactNode; // children 是特殊的 prop
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
