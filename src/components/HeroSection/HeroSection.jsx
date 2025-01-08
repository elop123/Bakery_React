import React from 'react'
import hero from "../../assets/images/Billeder/br├©d/slide1.jpg"
import style from "./HeroSection.module.scss"

export const HeroSection = () => {
  return (
    <section>
        <h2 className={style.title}>Vi elsker at lave brød</h2>
        <img className={style.heroImg} src={hero} alt="hero-img" />
    </section>
  )
}
