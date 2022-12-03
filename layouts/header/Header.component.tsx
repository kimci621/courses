import { IHeader } from "./header.types";
import styles from "./Header.module.css";

export const Header = ({}: IHeader): JSX.Element => {
  return <header className={styles.header}>header here</header>;
};
