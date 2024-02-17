import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode; // this is for string as well as HTML elements if type is string,
  // HTML is not rendered
  onClose: () => void;
}
function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}
export default Alert;
