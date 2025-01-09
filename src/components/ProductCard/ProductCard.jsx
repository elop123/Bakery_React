import React from 'react'
import style from './ProductCard.module.scss'
import icon from '../../assets/icons/bubble-chat.png'

export const ProductCard = ({imgSrc, numberComments, title, text}) => {
  return (
    <div className={style.cardContainer}>
      <img className={style.productImage} src={imgSrc} alt={title} />
      <div className={style.commentSection}>
        <img className={style.icon} src={icon} alt="Comment Icon" />
        <span className={style.comments}>{numberComments}</span>
      </div>
      <h3 className={style.cardTitle}>{title}</h3>
      <p className={style.cardText}>{text}</p>
      <button className={style.button}>SE MERE</button>
    </div>
  )
}
