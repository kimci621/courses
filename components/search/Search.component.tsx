import { ISearch } from "./search.types";
import styles from "./Search.module.css";

export const Search = ({}: ISearch): JSX.Element => {
  return (
    <div className={styles.searchWrapper}>
      <input type="text" placeholder="Поиск..." className={styles.input} />
      <img src="/icons/search-icon.svg" alt="search icon" className={styles.search}/>
    </div>
  );
};
