import { MouseEvent } from "react";

export interface IRating {
  count: number;
  handleClick: (e: MouseEvent) => void;
  handleMouseEnter: (e: MouseEvent) => void;
  handleMouseLeave: (e: MouseEvent) => void;
}
