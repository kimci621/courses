import { IAside } from "./aside.types";
import styles from "./Aside.module.css";
import { Search } from "../../components/search/Search.component";

export const Aside = ({ children }: IAside): JSX.Element => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <img src="/icons/owl-logo.svg" alt="logo" />
        <span>OWL</span>
        <span>top</span>
      </div>
      <Search></Search>
    </aside>
  );
};
