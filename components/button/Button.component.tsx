import { IButtonProps } from "./button.types";
import styles from "./Button.module.css";

export const Button = ({
  background,
  children,
  type,
  className,
  arrowPosition,
  ...props
}: IButtonProps): JSX.Element => {
  let arrowClass;
  if (arrowPosition == "right") {
    arrowClass = styles.arrowRight;
  } else if (arrowPosition == "down") {
    arrowClass = styles.arrowDown;
  } else {
    arrowClass = styles.arrowHide;
  }

  switch (background) {
    case "violet":
      return (
        <button className={styles.violet} type={type} {...props}>
          {children}
        </button>
      );
    case "white":
      return (
        <button className={styles.white} type={type} {...props}>
          {children}
          <img
            src="/icons/arrow-right.svg"
            alt="button src"
            className={arrowClass}
          ></img>
        </button>
      );
    default:
      return (
        <button className={className} {...props}>
          click
        </button>
      );
  }
};
