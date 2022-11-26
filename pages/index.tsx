//imports
import styles from "../styles/index.module.css";
import { Htag } from "../components/htag/Htag.component";
import { Button } from "../components/button/Button.component";
import { Ptag } from "../components/ptag/Ptag.component";
import { Label } from "../components/label/Label.component";
import { useState } from "react";
//types
type arrowPosition = "right" | "down";
//JSX
export default function Home(): JSX.Element {
  const [position, setPosition] = useState<arrowPosition>("right");
  const rotate = () => {
    position == "down" ? setPosition("right") : setPosition("down");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Htag tag="h1">TEST TITLE</Htag>
        <Htag tag="h2">TEST TITLE</Htag>
        <Htag tag="h3">TEST TITLE</Htag>
        <Htag tag="h4">TEST TITLE</Htag>
        <Htag tag="h5">TEST TITLE</Htag>
        <Button type="button" background="violet">
          click
        </Button>
        <Button
          type="button"
          background="white"
          arrowPosition={position}
          onClick={rotate}
        >
          click
        </Button>
        <Ptag size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere,
          laudantium error saepe dignissimos quaerat, distinctio enim velit
        </Ptag>
        <Ptag size="medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere,
          laudantium error saepe dignissimos quaerat, distinctio enim velit
        </Ptag>
        <Label color="red">test</Label>
        <Label color="green">test</Label>
        <Label color="violet">test</Label>
        <Label color="gray">test</Label>
      </div>
    </div>
  );
}
