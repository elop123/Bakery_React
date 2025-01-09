import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import bgImage from "../../assets/images/Billeder/newsletterbg.jpg"

import style from "./SingUp.module.scss"

export const SignUp = () => {
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const[isSubmitted, setIsSubmitted] = useState(false);

  
  const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
      return regex.test(email);
  };
  const handleSubmit = (e) =>{
      e.preventDefault();
      setIsSubmitted(true);
  
      if (validateEmail(email)){
          setMessage('Success! You have been subscribed!');
          setTimeout(() => {
            setMessage(''); // Clear message after 2 seconds
          }, 4000);
      }else{
          setMessage('Please enter a valid email address');
          setTimeout(() => {
            setMessage(''); // Clear message after 2 seconds
          }, 2000);
          setEmail(''); // Clear the email input
          }

      }
      const handleInputChange = (e) => {
        setEmail(e.target.value);
        setIsSubmitted(false); // Reset submission state when typing
        setMessage(''); // Clear the message while typing
      }

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
        onChange={handleInputChange}
        type="email"
        value ={email}
        placeholder="Indtast din email..."
      />
       <button onClick={handleSubmit} className={style.btn} type="submit">
        Tilmeld
      </button> 
    </div>
    {isSubmitted && message && (
        <p style={{ marginTop: '10px', color: validateEmail(email) ? 'green' : 'red' }}>
                    {message}</p>
            )}
    </section>
  )
}
