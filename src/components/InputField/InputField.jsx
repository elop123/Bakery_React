import React from 'react'
import style from './InputField.module.scss'

export const InputField = ({type, name, placeholder,id, labelText, action}) => {

   const onInputChange= (e)=>{
        action(e.target.value);
    }
  return (

    <>
    <div className={style.inputContainer}>
    {name && <label htmlFor={name}>{labelText}</label>}
    <input 
           className={style.input}
           name={name}
           onChange={onInputChange}
           id={id} 
           type={type} 
           placeholder={placeholder}
           />
           </div>
    </>
  )
}
