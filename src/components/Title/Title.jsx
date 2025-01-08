import React from 'react'
import style from "./Title.module.scss"

export const Title = ({title, text}) => {

  //Object Destructuring
  return (
    <section className={style.container}>
    <h2 className={style.title}>{title}</h2>
    <p className={style.text}>{text}</p>
  </section>
  )
}
