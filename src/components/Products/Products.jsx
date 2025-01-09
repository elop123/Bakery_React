import React from 'react'
import { useState, useEffect } from 'react';
import { Title } from '../Title/Title'
import style from './Products.module.scss'
import icon from '../../assets/icons/bubble-chat.png'
 

export const Products = () => {
const url=`https://api.mediehuset.net/bakeonline/products`;
 
const[list, setList] = useState([])
 
useEffect(()=>{
    const fetchList= async ()=>{
        try{
                 const response = await fetch(url);
                 const data = await response.json();
                 setList(data.items)
             }
             catch(error){
                 console.error('Error fetching', error)
             }
         }
         fetchList()}, [])
 
         return (
             <section className={style.container}>
             
             <div className={style.sideList}>
               <li>RUNDSTYKKER</li>
               <li>BAGUETTES</li>
               <li>FRANSKBRØD</li>
               <li>KAGER</li>
               <li>RUGBRØD</li>
             </div> 
             <ul className={style.list}>
                     {list.slice(0,6).map((item)=>(
                       <div className={style.listContainer}>
                         <li className={style.listItem} key={item.id}>
                             <img className={style.listImg} src={item.image.fullpath} alt={item.title} />
                             <span className={style.commentCount}>
                             <img  className={style.icon} src={icon} alt="Comment Icon" />{item.num_comments}</span>
                             <h3 className={style.listTitle}>{item.title.slice(0,25)}</h3>
                             <p className={style.listText}>{item.teaser.slice(0,70)}</p>
                             <button className={style.btnn}>SE MERE</button>
                         </li>
                         <div className={style.buttonContainer}>
                         
                         </div>
                         
                         </div>
                     ))}
                  </ul>
                  
              </section>
             
          
            )
          
             }
         
 
 
 

            //  title.toUpperCase().split("")[0]- this makes the text to be in row on th samecd level
  