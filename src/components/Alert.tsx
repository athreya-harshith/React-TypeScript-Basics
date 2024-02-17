import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is for string as well as HTML elements if type is string,
  // HTML is not rendered
}
function Alert({ children }: Props) {
  return <div className="alert alert-primary">{children}</div>;
}
export default Alert;
