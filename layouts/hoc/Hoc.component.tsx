import { IHoc } from "./hoc.types";
import styles from "./Hoc.module.css";
import { Header } from "../header/Header.component";
import { Aside } from "../aside/Aside.component";
import { Footer } from "../footer/Footer.component";
import { FunctionComponent } from "react";
const Layout = ({ children }: IHoc): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header className={styles.header}></Header>
      <div className={styles.content}>
        <Aside></Aside>
        <main className={styles.main}>
          <div>{children}</div>
        </main>
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function (props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    );
  };
};
