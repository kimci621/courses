import { useState } from "react";
import { IRating } from "./rating.types";
import styles from "./Rating.module.css";

export const Rating = ({
  count,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}: IRating): JSX.Element => {
  const [stars, setStart] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const updatedStars = stars.map((el: JSX.Element, i: number): JSX.Element => {
    return (
      <img
        src={i < count ? "/icons/star-filled.svg" : "/icons/star.svg"}
        alt="star"
        data-order={i + 1}
        key={i}
        className={styles.star}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />
    );
  });

  return (
    <div className={styles.ratingWrapper} onMouseLeave={handleMouseLeave}>
      {updatedStars.map((i) => i)}
    </div>
  );
};
