//imports
import styles from "../styles/index.module.css";
import {Htag} from "../components/htag/Htag.component";
import {Button} from "../components/button/Button.component";
import {Ptag} from "../components/ptag/Ptag.component";
import {Label} from "../components/label/Label.component";
import {Rating} from "../components/rating/Rating.component";
import {useEffect, useState} from "react";
//types
type arrowPosition = "right" | "down";
//JSX
export default function Home(): JSX.Element {
  const [position, setPosition] = useState<arrowPosition>("right");
  const [count, setCount] = useState<1 | 2 | 3 | 4 | 5>(1)
  const rotate = () => {
    position == "down" ? setPosition("right") : setPosition("down");
  };
  useEffect(() => {
    console.log('mounted')
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Rating count={1}></Rating>
      </div>
    </div>
  );
}
