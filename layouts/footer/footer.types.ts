import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFooter
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode | React.ReactNode[];
}
