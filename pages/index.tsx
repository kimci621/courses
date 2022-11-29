//imports
import styles from "../styles/index.module.css";
import { Htag } from "../components/htag/Htag.component";
import { Button } from "../components/button/Button.component";
import { Ptag } from "../components/ptag/Ptag.component";
import { Label } from "../components/label/Label.component";
import { Rating } from "../components/rating/Rating.component";
import { useEffect, useState } from "react";
//types
type arrowPosition = "right" | "down";
//JSX
export default function Home(): JSX.Element {
  const [position, setPosition] = useState<arrowPosition>("right");
  const [count, setCount] = useState<number>(1);
  const rotate = () => {
    position == "down" ? setPosition("right") : setPosition("down");
  };

  function handleClick(e: Event): void {
    const el = e.target as HTMLImageElement;
    el.getAttribute("data-order")
      ? setCount(+el.getAttribute("data-order"))
      : null;
  }

  function handleMouseEnter(e: Event): void {
    const el = e.target as HTMLImageElement;
    const order = el.getAttribute("data-order");
    el.parentNode.querySelectorAll("img").forEach((i) => {
      i.getAttribute("data-order") <= order
        ? i.classList.add("over")
        : i.classList.remove("over");
    });
  }

  function handleMouseLeave(e: Event): void {
    const el = e.target as HTMLImageElement;
    if (el.tagName == "IMG") {
      el.parentNode
        .querySelectorAll("img")
        .forEach((i) => i.classList.remove("over"));
    } else {
      el.querySelectorAll("img").forEach((i) => i.classList.remove("over"));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Rating
          count={count}
          handleClick={handleClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        ></Rating>
      </div>
    </div>
  );
}
