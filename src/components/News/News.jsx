import React, { useEffect, useState } from 'react'
import { Title } from '../Title/Title'
import style from "./News.module.scss"

export const News = () => {
    const url = `https://api.mediehuset.net/bakeonline/news`;

    const[news, setNews]= useState([]);

    useEffect(()=>{
        const fetchNews = async ()=>{
            try{
                const response = await fetch(url);
                const data = await response.json();
                setNews(data.items.slice(0,3))
            }
            catch(error){
                console.error('Error fetching', error)
            }
        }
        fetchNews()}, [])
  return (
   <section>
     <Title  title="Vi skaber lækkert brød! "
             text ="Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud." />
     <ul className={style.newsRow}>
        {news.map((item)=>(
          
            <li className={style.newsItem} key={item.id}>
                <img className={style.newsImg} src={item.image} alt="newsImg" />
                <h3 className={style.newsTitle}>{item.title.slice(0,15)}</h3>
                <p className={style.newsText}>{item.teaser.slice(0,100)}</p>
            </li>
          
        ))}
     </ul>
   </section>
  )
}
