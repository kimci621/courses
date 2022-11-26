import { IPtag } from "./ptag.types";
import styles from "./Ptag.module.css";

export const Ptag = ({ size, children, specificClass }: IPtag): JSX.Element => {
  if (size == "small") {
    return <p className={styles.small}>{children}</p>;
  } else if (size == "medium") {
    return <p className={styles.medium}>{children}</p>;
  } else {
    return <p className={specificClass}></p>;
  }
};
