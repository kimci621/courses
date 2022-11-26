import { ReactNode } from "react";

export interface IHtagProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
  children: ReactNode;
}
