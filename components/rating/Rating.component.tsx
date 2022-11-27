import {useState} from "react";
import {IRating} from "./rating.types";
import styles from './Rating.module.css'



export const Rating = ({count}: IRating): JSX.Element => {
  const [stars, setStart] = useState<JSX.Element[]>(new Array(5).fill(<></>))
  const setRating = (prop: number) => {
    console.log(prop)
  }

  const updatedStars = stars.map((el: JSX.Element, i: number): JSX.Element => {
    return (
      <img src={i < count ? '/icons/star-filled.svg' : '/icons/star.svg'} alt="star" key={i}/>
    )
  })

  return <div className={styles.ratingWrapper}>{updatedStars.map(i => i)}</div>
};
//TODO Нужно реализовать сохранение окрашенных звезд по клику и окрашивание по клику

