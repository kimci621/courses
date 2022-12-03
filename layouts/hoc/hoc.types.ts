import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHoc
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
