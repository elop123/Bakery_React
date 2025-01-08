import React from 'react'
import style from './ProductCard.module.scss'

export const ProductCard = ({imgSrc, numberComments, title, text}) => {
  return (
    <div className={style.cardContainer}>
        <img src={imgSrc} alt="" />
        <span>{numberComments}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>SE MERE</button>
    </div>
  )
}
