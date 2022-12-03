import { IFooter } from "./footer.types";
import styles from "./Footer.module.css";

let year: string = new Date().getFullYear().toString();

export const Footer = ({ children }: IFooter): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div>OwlTop © 2020 - {year} Все права защищены</div>
      <div>Пользовательское соглашение</div>
      <div>Политика конфиденциальности</div>
    </footer>
  );
};
