import React from "react";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "info" | "success"; // ? says its optional
  onClick: () => void; // remember this is the user added function
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
