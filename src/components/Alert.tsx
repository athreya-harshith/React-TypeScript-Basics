import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is for string as well as HTML elements if type is string,
  // HTML is not rendered
}
function Alert({ children }: Props) {
  return <div>{children}</div>;
}
export default Alert;
