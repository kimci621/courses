//imports
import styles from "../styles/index.module.css";
import axios from "axios";
//components
import { Htag } from "../components/htag/Htag.component";
import { Button } from "../components/button/Button.component";
import { Ptag } from "../components/ptag/Ptag.component";
import { Label } from "../components/label/Label.component";
import { Rating } from "../components/rating/Rating.component";
import { withLayout } from "../layouts/hoc/Hoc.component";
import { useEffect, useState } from "react";
//types
type arrowPosition = "right" | "down";
//JSX
function Home(): JSX.Element {
  const [position, setPosition] = useState<arrowPosition>("right");
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    axios
      .post("/api/test", {
        message: "here is message",
        name: "Flint Eastwood",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const rotate = () => {
    position == "down" ? setPosition("right") : setPosition("down");
  };

  function handleClick(e: MouseEvent): void {
    const el = e.target as HTMLImageElement;
    el.getAttribute("data-order")
      ? setCount(+el.getAttribute("data-order"))
      : null;
  }

  function handleMouseEnter(e: MouseEvent): void {
    console.log(count);

    const el = e.target as HTMLImageElement;
    const order = el.getAttribute("data-order");
    el.parentNode.querySelectorAll("img").forEach((i) => {
      i.getAttribute("data-order") <= order
        ? (i.src = "/icons/star-filled.svg")
        : (i.src = "/icons/star-filled-gray.svg");
    });
  }

  function handleMouseLeave(e: MouseEvent): void {
    const el = e.target as HTMLImageElement;
    if (el.tagName == "IMG") {
      el.parentNode
        .querySelectorAll("img")
        .forEach((i, index) =>
          index < count
            ? (i.src = "/icons/star-filled.svg")
            : (i.src = "/icons/star-filled-gray.svg")
        );
    } else {
      el.querySelectorAll("img").forEach((i, index) => {
        index < count
          ? (i.src = "/icons/star-filled.svg")
          : (i.src = "/icons/star-filled-gray.svg");
      });
    }
  }

  return (
    <>
      {/* <Rating
        count={count}
        // @ts-expect-error
        handleClick={handleClick}
        // @ts-expect-error
        handleMouseEnter={handleMouseEnter}
        // @ts-expect-error
        handleMouseLeave={handleMouseLeave}
      ></Rating> */}
    </>
  );
}

export default withLayout(Home);
