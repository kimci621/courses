import { ReactNode } from "react";

export interface IPtag {
  size?: "small" | "medium";
  children: ReactNode;
  specificClass?: string;
}
