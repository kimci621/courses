import { ILabel } from "./label.types";
import styles from "./Label.module.css";

export const Label = ({ color, children }: ILabel): JSX.Element => {
  switch (color) {
    case "red":
      return <div className={styles.red}>{children}</div>;
    case "gray":
      return <div className={styles.gray}>{children}</div>;
    case "violet":
      return <div className={styles.violet}>{children}</div>;
    case "green":
      return <div className={styles.green}>{children}</div>;
    default:
      return <></>;
  }
};
