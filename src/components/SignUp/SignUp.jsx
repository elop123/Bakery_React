import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import bgImage from "../../assets/images/Billeder/newsletterbg.jpg"

import style from "./SingUp.module.scss"

export const SignUp = () => {
  return (
    <section className={style.signUp} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={style.textContainer}>
        <h3 className={style.title}>Tilmelding dig vores nyhedsbrev</h3>
        <p className={style.text}>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
        </div>
        <div className={style.inputContainer}>
        <div className={style.iconWrapper}>
        <FontAwesomeIcon icon={faEnvelope} style={{ margin:'auto', backgroundColor:'grey' , padding:'0.295rem'}} />
      </div>
      <input
        className={style.input}
        type="text"
        placeholder="Indtast din email..."
      />
       <button className={style.btn} type="submit">
        Tilmeld
      </button> 
    </div>
    </section>
  )
}
