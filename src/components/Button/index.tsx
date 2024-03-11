import React from "react";
import { btnStyle } from "./style.css";

interface BtnProps {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Btn = ({
  children,
  color = "primary",
  size = "medium",
}: BtnProps) => (
  <button className={btnStyle} data-color={color} data-size={size}>
    {children}
  </button>
);
