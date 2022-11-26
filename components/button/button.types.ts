import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  background?: "white" | "violet";
  children: ReactNode;
  type: "button" | "submit";
  className?: string;
  arrowPosition?: "right" | "down";
}
